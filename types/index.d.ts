type SearchParamProps = {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { [key: string]: string };
};

type FileType = "image" | "video" | "audio" | "document"; 