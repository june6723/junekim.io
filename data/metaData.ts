const { URL } = process.env;

const metaData: MetaData = {
  title: 'June Kim',
  url: URL as string,
  siteName: 'June Kim',
  description: 'June Kim - Frontend developer',
  image: `${URL}/logo.jpeg`,
  twitterName: 'junekim_fe',
};
export const getCustomMeta = (meta: Partial<MetaData>) => ({
  ...metaData,
  ...meta,
});

export default metaData;
