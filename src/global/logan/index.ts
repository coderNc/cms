import Logan from 'logan-web/src/index';

Logan.initConfig({
  // reportUrl: 'https://yourServerAddressToAcceptLogs',
  // publicKey:
  //   '-----BEGIN PUBLIC KEY-----\n' +
  //   'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgG2m5VVtZ4mHml3FB9foDRpDW7Pw\n' +
  //   'Foa+1eYN777rNmIdnmezQqHWIRVcnTRVjrgGt2ndP2cYT7MgmWpvr8IjgN0PZ6ng\n' +
  //   'MmKYGpapMqkxsnS/6Q8UZO4PQNlnsK2hSPoIDeJcHxDvo6Nelg+mRHEpD6K+1FIq\n' +
  //   'zvdwVPCcgK7UbZElAgMBAAE=\n' +
  //   '-----END PUBLIC KEY-----',
  errorHandler: function (e) {
    console.log(e, '===errorHandler===');
  },
  succHandler: function (logItem) {
    const content = logItem.logContent;
    const encryptVersion = logItem.encryptVersion;
    console.log('====Log Succ:' + content, encryptVersion);
  }
});

export default Logan;
