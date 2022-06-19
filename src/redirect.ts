type UrlData = {
  id: number;
  destinationUrl: string;
};

const urlList: UrlData[] = [
  { id: 0, destinationUrl: "https://twitter.com/yuigishidev" },
];
const SearchRedirectUrl = (id: string): string => {
  const urlId = parseInt(id, 10);

  const redirectUrl = urlList.find((data: UrlData) => data.id === urlId);
  if (redirectUrl !== undefined) {
    return redirectUrl.destinationUrl;
  }

  return "example.com";
};

export default SearchRedirectUrl;
