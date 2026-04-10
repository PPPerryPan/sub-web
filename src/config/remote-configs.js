// 远程配置选项
export const REMOTE_CONFIGS = [
  {
    label: "universal",
    options: [
      {
        label: "No-Urltest",
        value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"
      },
      {
        label: "Urltest",
        value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"
      }
    ]
  },
  {
    label: "customized",
    options: [
      { label: "Maying", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini" },
      { label: "Ytoo", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini" },
      { label: "FlowerCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini" },
      { label: "Nexitally", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini" },
      { label: "SoCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini" },
      { label: "ARK", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini" },
      { label: "ssrCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini" }
    ]
  },
  {
    label: "Special",
    options: [
      { label: "NeteaseUnblock(仅规则，No-Urltest)", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini" },
      { label: "Basic(仅GEOIP CN + Final)", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini" }
    ]
  },
  {
    label: "ACL4SSR",
    options: [
      { label: "ACL4SSR.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR.ini" },
      { label: "ACL4SSR_AdblockPlus.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_AdblockPlus.ini" },
      { label: "ACL4SSR_BackCN.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_BackCN.ini" },
      { label: "ACL4SSR_Mini.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini.ini" },
      { label: "ACL4SSR_Mini_Fallback.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_Fallback.ini" },
      { label: "ACL4SSR_Mini_MultiMode.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_MultiMode.ini" },
      { label: "ACL4SSR_Mini_NoAuto.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_NoAuto.ini" },
      { label: "ACL4SSR_NoApple.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoApple.ini" },
      { label: "ACL4SSR_NoAuto.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto.ini" },
      { label: "ACL4SSR_NoAuto_NoApple.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto_NoApple.ini" },
      { label: "ACL4SSR_NoAuto_NoApple_NoMicrosoft.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto_NoApple_NoMicrosoft.ini" },
      { label: "ACL4SSR_NoMicrosoft.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoMicrosoft.ini" },
      { label: "ACL4SSR_Online.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini" },
      { label: "ACL4SSR_Online_AdblockPlus.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini" },
      { label: "ACL4SSR_Online_Full.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini" },
      { label: "ACL4SSR_Online_Full_AdblockPlus.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini" },
      { label: "ACL4SSR_Online_Full_Google.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini" },
      { label: "ACL4SSR_Online_Full_MultiMode.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini" },
      { label: "ACL4SSR_Online_Full_Netflix.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini" },
      { label: "ACL4SSR_Online_Full_NoAuto.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini" },
      { label: "ACL4SSR_Online_Mini.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini" },
      { label: "ACL4SSR_Online_Mini_AdblockPlus.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini" },
      { label: "ACL4SSR_Online_Mini_Ai.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Ai.ini" },
      { label: "ACL4SSR_Online_Mini_Fallback.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini" },
      { label: "ACL4SSR_Online_Mini_MultiCountry.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini" },
      { label: "ACL4SSR_Online_Mini_MultiMode.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini" },
      { label: "ACL4SSR_Online_Mini_NoAuto.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini" },
      { label: "ACL4SSR_Online_MultiCountry.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini" },
      { label: "ACL4SSR_Online_NoAuto.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini" },
      { label: "ACL4SSR_Online_NoReject.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini" },
      { label: "ACL4SSR_WithChinaIp.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithChinaIp.ini" },
      { label: "ACL4SSR_WithChinaIp_WithGFW.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithChinaIp_WithGFW.ini" },
      { label: "ACL4SSR_WithGFW.ini", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithGFW.ini" }
    ]
  }
];