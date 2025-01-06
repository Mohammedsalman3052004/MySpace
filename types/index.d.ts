type SearchParamProps = {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { [key: string]: string };
};

type FileType = "image" | "video" | "audio" | "document"; 

type UploadFileProps = {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
};

type GetFilesProps = {
  types?: string[];
  searchText?: string;
  sort?: string;
  limit?: number;
};

type RenameFileProps = {
  fileId: string;
  name: string;
  extension: string;
  path: string;
};

type UpdateFileUsersProps = {
  fileId: string;
  emails: string[];
  path: string;
};

type DeleteFileProps = {
  fileId: string;
  bucketFileId: string;
  path: string;
}; 