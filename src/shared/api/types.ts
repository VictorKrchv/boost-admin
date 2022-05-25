export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface BaseComment extends BaseEntity {
  author: { email: string; id: number };
  message: string;
  parent: BaseComment;
  children: BaseComment[];
}

export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
}

export interface PaginationParams {
  page: number;
  take: number;
}

export interface Meta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ApiListResponse<T> {
  data: T[];
  meta: Meta;
}
