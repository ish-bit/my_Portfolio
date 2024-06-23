const switchTheme = (theme:any) => {
  const themeVars = theme === 'dark' ? {
    '@primary-color': '#1890ff',
    '@body-background': '#001529',
    '@component-background': '#141414',
    '@text-color': 'rgba(255, 255, 255, 0.85)'
  } : {
    '@primary-color': '#1890ff',
    '@body-background': '#ffffff',
    '@component-background': '#f0f2f5',
    '@text-color': 'rgba(0, 0, 0, 0.85)'
  };

  window.less.modifyVars(themeVars).then(() => {
    console.log(`${theme} mode applied.`);
  }).catch(error => {
    console.error(`Failed to update theme: `, error);
  });
};

export default switchTheme;
