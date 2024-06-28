export enum UserActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type TypeData = 'element' | 'array' | 'status';

type InfoArrayData = {
  elements: number;
  pages: number;
};

interface ArrayData {
  info: InfoArrayData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any[];
}

export interface ElementData {
  type: 'string' | 'number' | 'boolean' | 'object';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

interface ErrorData {
  code: string;
  message: string;
}

export interface JsonCommunicationType {
  success: boolean;
  typeData: TypeData;
  data: ArrayData | ElementData | ErrorData | null;
}
