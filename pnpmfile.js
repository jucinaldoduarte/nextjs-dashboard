module.exports = {
  hooks: {
    readPackage(packageJson) {
      if (packageJson.dependencies && packageJson.dependencies.bcrypt) {
        packageJson.dependencies.bcrypt = "5.1.1"; // ou a versão que você está usando
      }
      return packageJson;
    }
  }
};
