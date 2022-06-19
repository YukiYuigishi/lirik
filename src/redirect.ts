type UrlData = {
  id: number;
  destinationUrl: string;
};
const urlList: UrlData[] = [
  { id: 0, destinationUrl: "https://twitter.com/yuigishidev" },
];

const SearchRedirectUrl = (id: string): string | undefined => {
  const urlId = parseInt(id, 10);
  const redirectUrl: UrlData | undefined = urlList.find(
    (data: UrlData) => data.id === urlId
  );

  if (redirectUrl === undefined) {
    return undefined;
  }
  return redirectUrl.destinationUrl;
};
export default SearchRedirectUrl;
