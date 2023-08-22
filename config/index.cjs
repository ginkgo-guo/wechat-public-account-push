/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbb138fae8ff3ae84',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'cca8cc67e9a0044b2e118b9a03d0708f',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogIP-6qE4nrDjH3RgHk0EVTeMMHo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RWJLKwc7PTehlTeCNic67sw2kiXBCBsAkOqr3eJOP9s',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-22',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'Barry', year: '2002', date: '03-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-06-14' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'JEOumsPHOAPBBTBB5YBkVa6N32xK159WtEFIast4c6U',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogIP-6qzRobta6I2AAEOLNn6-Cz4',
    }
  ],

}

module.exports = USER_CONFIG

