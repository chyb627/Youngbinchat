const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// TypeScript alias 설정을 함수로 정의합니다.
const getAliasConfig = (srcDir) => {
  return {
    '~': `${srcDir}/src`,
    '~components': `${srcDir}/src/components`,
    '~hooks': `${srcDir}/src/hooks`,
    '~modules': `${srcDir}/src/modules`,
    '~screens': `${srcDir}/src/screens`,
  };
};

module.exports = (async () => {
  // 기본 설정 가져오기
  const defaultConfig = await getDefaultConfig(__dirname);

  // 별도로 정의한 alias 설정 가져오기
  const aliasConfig = getAliasConfig(__dirname);

  // 기본 설정과 alias 설정 합치기
  return mergeConfig(defaultConfig, {
    resolver: {
      extraNodeModules: aliasConfig,
    },
  });
})();
