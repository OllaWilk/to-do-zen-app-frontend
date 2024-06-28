export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

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
  value: any[];
}

export interface ElementData {
  type: 'string' | 'number' | 'boolean' | 'object';
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
