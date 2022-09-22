import React, { CSSProperties, ReactNode } from 'react';

export interface ProgressProps {
  style?: CSSProperties;
  className?: string | string[];
  type?: 'line' | 'circle';
  steps?: number;
  animation?: boolean;
  status?: 'success' | 'error' | 'normal' | 'warning';
  color?: string | { [key: string]: string };
  trailColor?: string;
  showText?: boolean;
  formatText?: (percent: number) => ReactNode;
  percent: number;
  strokeWidth?: number;
  width?: string | number;
  size?: 'small' | 'default' | 'mini' | 'large';
  buffer?: boolean;
  bufferColor?: string | object;
}

export const STATUS: {
  [key: string]: UploadStatus;
} = {
  init: 'init',
  uploading: 'uploading',
  success: 'done',
  fail: 'error',
};

export type UploadStatus = 'init' | 'uploading' | 'done' | 'error';

export type ListType = 'text' | 'picture-list' | 'picture-card';

export type CustomIconType = {
  previewIcon?: ReactNode;
  removeIcon?: ReactNode;
  fileIcon?: ReactNode;
  reuploadIcon?: ReactNode;
  cancelIcon?: ReactNode;
  startIcon?: ReactNode;
  errorIcon?: ReactNode;
  successIcon?: ReactNode;
  fileName?: (file: UploadItem) => ReactNode;
  // 2.34.0
  progressRender?: (file: UploadItem, originDom: ReactNode) => React.ReactElement;
  // 2.34.0
  imageRender?: (file: UploadItem) => React.ReactNode;
};

export type RequestOptions = Pick<
  UploadProps,
  'headers' | 'name' | 'data' | 'withCredentials' | 'action'
> & {
  onProgress: (percent: number, event?: ProgressEvent) => void;
  onSuccess: (response?: object) => void;
  onError: (response?: object) => void;
  file: File;
};

export interface UploadRequestReturn {
  abort?: () => void;
  [key: string]: any;
}

export type UploadRequest = (options: RequestOptions) => UploadRequestReturn | void;

export interface UploadProps {
  style?: CSSProperties;
  className?: string | string[];
  defaultFileList?: UploadItem[];
  fileList?: UploadItem[];
  directory?: boolean;
  accept?: string;
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void;
  listType?: 'text' | 'picture-list' | 'picture-card';
  showUploadList?: boolean | CustomIconType;
  autoUpload?: boolean;
  action?: string;
  limit?: number | { maxCount: number; hideOnExceedLimit?: boolean };
  disabled?: boolean;
  drag?: boolean;
  multiple?: boolean;
  tip?: string | React.ReactNode;
  headers?: object;
  data?: object | ((any: any) => object);
  name?: string | ((any: any) => string);
  withCredentials?: boolean;
  progressProps?: Partial<ProgressProps>;
  renderUploadItem?: (originNode: ReactNode, file: UploadItem, fileList: UploadItem[]) => ReactNode;
  renderUploadList?: (fileList: UploadItem[], uploadListProps: UploadListProps) => ReactNode;
  onChange?: (fileList: UploadItem[], file: UploadItem) => void;
  onPreview?: (file: UploadItem) => void;
  onRemove?: (file: UploadItem, fileList: UploadItem[]) => void;
  onProgress?: (file: UploadItem, e?: ProgressEvent) => void;
  onReupload?: (file: UploadItem) => void;
  onExceedLimit?: (files: File[], fileList: UploadItem[]) => void;
  beforeUpload?: (file: File, filesList: File[]) => boolean | Promise<any>;
  onDrop?: (e: React.DragEvent) => void;
}

export interface UploadListProps {
  listType?: string;
  fileList?: UploadItem[];
  showUploadList?: boolean | CustomIconType;
  progressProps?: Partial<ProgressProps>;
  onUpload?: (file: UploadItem) => void;
  onAbort?: (file: UploadItem) => void;
  onRemove?: (file: UploadItem) => void;
  onReupload?: (file: UploadItem) => void;
  onPreview?: (file: UploadItem) => void;
  disabled?: boolean;
  renderUploadItem?: (originNode: ReactNode, file: UploadItem, fileList: UploadItem[]) => ReactNode;
  renderUploadList?: (
    fileList: UploadItem[],
    uploadListProps: Omit<UploadListProps, 'renderUploadList'>,
  ) => ReactNode;
  prefixCls?: string;
}

export type UploadItem = {
  uid: string;
  status?: UploadStatus;
  originFile?: File;
  percent?: number;
  response?: object;
  url?: string;
  name?: string;
  children?: ReactNode;
};

export interface UploaderProps extends UploadProps {
  prefixCls?: string;
  limit?: number;
  hide?: boolean;
  onFileStatusChange?: (file: UploadItem) => void;
}

export type TriggerProps = {
  tip?: string | React.ReactNode;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  directory?: boolean;
  drag?: boolean;
  listType?: 'text' | 'picture-list' | 'picture-card';
  onClick: () => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragFiles: (files: File[]) => void;
  prefixCls?: string;
};

export type UploadInstance = {
  submit: (file?: UploadItem) => void;
  abort: (file: UploadItem) => void;
  reupload: (file: UploadItem) => void;
};
