const importAll = (r: __WebpackModuleApi.RequireContext) => {
  const images: {
    [propName: string]: React.FunctionComponent<
      React.SVGAttributes<SVGElement>
    >;
  } = {};
  r.keys().map(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

export const weatherIcons = importAll(
  require.context('../assets/weather-icons', false, /\.(png|jpe?g|svg)$/),
);
