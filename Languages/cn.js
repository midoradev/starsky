module.exports = {
  error: "❌ 发生错误，请稍后重试！",
  interactionCreate: {
    errorCmd:
      "未找到指令 `<command>`。请加入 [支持服务器](https://discord.gg/y97MvVyrwC) 报告该错误！",
    onCooldown: "嘿 <user>，请稍等 **<t:<duration>:R>** 后再次使用此指令！",
    permissionError: "我没有 `管理员` 权限，无法执行任何指令。",
  },
  hasVoted:
    "你必须在 [Top.gg](<link>) 上为我投票，或购买 [Premium Starsky](https://www.patreon.com/midora) 才能使用此指令。",
  giveaway: {
    creatingPanel: "✅ 正在创建抽奖，正在发送设置面板...",

    errorPrizeDuration: "❌ 请先设置奖品和时长，然后再确认。",

    errorYourSession: "❌ 此抽奖创建会话不属于你。",
    invalidChannel: "❌ 无效频道，仅支持文字频道。",
    panelNotFound: "❌ 未找到设置面板的频道或消息。",
    panelMsgFetchFail: "❌ 无法获取抽奖面板消息。",

    selectHostPlaceholder: "选择主持人",
    selectHostContent: "👑 请选择主持人：",

    selectRolePlaceholder: "选择一个所需角色",
    selectRoleContent: "🔒 请选择所需角色：",

    modalWinnersTitle: "设置中奖人数",
    modalWinnersLabel: "输入中奖人数",

    modalDescriptionTitle: "设置描述",
    modalServerTitle: "设置服务器",

    modalValueLabel: "输入值",

    modalImagesTitle: "设置图片",
    modalThumbnailLabel: "缩略图链接",
    modalImageLabel: "主图链接",

    modalBonusTitle: "奖励角色设置",
    modalBonusRoleLabel: "奖励角色 ID",
    modalBonusAmountLabel: "奖励抽奖次数",

    errorInvalidDuration: "❌ 抽奖持续时间无效。",
    errorInvalidWinners: "❌ 中奖人数无效。",
    errorInvalidThumbnail:
      "❌ 无效的 <type>：链接必须以 http:// 或 https:// 开头，以 .png、.jpg、.jpeg 或 .gif 结尾，且长度不超过 2048 个字符。",
    errorInvalidBonusAmount: "❌ 无效的奖励次数。",

    selectChannelPlaceholder: "选择频道",
    selectChannelText: "📢 请选择抽奖频道：",
    setTitle: "设置",
    enterValueLabel: "输入值",
    cancelled: "❌ 已取消抽奖创建并删除设置面板。",
    panelRefreshed: "🔄 面板已刷新！",
    panelRefreshFailed: "❌ 面板刷新失败。",
    fifteenMinTimer: "该面板将在 15 分钟后失效。",

    createCmd: {
      permissionError: "❌ 你需要具备 `管理员` 权限才能使用此指令。",
      invalidTime: "❌ 请输入有效的持续时间！示例：10s、1m、1h、1d",
      invalidWinner: "❌ 请输入有效的中奖人数（至少 1 名）",
      serverCheckEmbedUnsuccess:
        "😳 Starsky 未加入此邀请码的服务器：[<value>](<invite>)",
      serverCheckEmbedSuccess:
        "✅ 服务器要求设置成功！Starsky 已加入：[<value>](<invite>)",
      giveawayStart: "✅ 抽奖已在 <channel> 开始！",
      invalidInvite: "🤔 找不到该服务器！",
      toMuchWinner:
        "❌ 中奖人数过多！最多 20 名（购买 [Premium Starsky](https://www.patreon.com/midora) 可达 40 名）",
      toMuchTime: "❌ 抽奖时间不能超过 2 周！（Premium Starsky 可达 4 周）",
      lessTime: "❌ 抽奖时间不能少于 1 分钟。",
      maxGiveawaysReached:
        "❌ 你的服务器已达到抽奖上限（20 个）。请等待部分抽奖结束后再创建！（Premium Starsky 可达 50 个）",
      toMuchWinnerPremium: "❌ 中奖人数超过 Premium 限制（最多 40 名）。",
      toMuchTimePremium: "❌ 抽奖时间超过 Premium 限制（最多 4 周）。",
      maxGiveawaysReachedPremium:
        "❌ 你的服务器已达到 Premium 抽奖上限（50 个）。请等待部分抽奖结束后再创建！",
      invalidThumbnail: "❌ 缩略图链接无效。",
      invalidImage: "❌ 主图链接无效。",
      messages: {
        inviteToParticipate: "**点击 <reaction> 以参与！**",
        partDescription: "<description>",
        partRequirementsTitle: "**参与条件：**",
        partRole: "- 身份组：<role>",
        partServer: "- 服务器：[点击加入](<invite>)",
      },
      bonus: {
        entries: "❌ 请为 <bonusRole> 指定奖励抽奖次数！",
        embedDescription:
          "**<bonusRole>** 在本次抽奖中拥有 **<bonusEntries>** 次额外机会！",
      },

      embedTitle: "🎉 抽奖创建",
      embedDescription: "使用下方按钮和菜单来设置抽奖内容。",
      prizeField: "🎁 奖品",
      durationField: "⏳ 时长",
      winnersField: "🏆 中奖人数",
      channelField: "📢 频道",
      roleReqField: "🔒 所需角色",
      serverReqField: "🌐 所需服务器",
      bonusRoleField: "🎖️ 奖励角色",
      bonusAmountField: "➕ 奖励数量",
      hostField: "👑 主持人",
      descriptionField: "📝 描述",
      thumbnailField: "🖼️ 缩略图",
      imageField: "📷 主图",
      endsAtField: "📅 结束时间",
      extraDataField: "📎 附加数据",
      giveawayId: "抽奖 ID：<id>",
      serverReq: "- 服务器要求",
      roleReq: "- 身份组要求",
      createdGiveaway: "🎉 已创建抽奖活动",
      na: "无",
      unknown: "未知",
      unknownRole: "未知身份组",
      notSet: "未设置",
      none: "无",
      prizeBtn: "🎁 奖品",
      durationBtn: "⏳ 时长",
      channelBtn: "📢 频道",
      moreOptionsPlaceholder: "⚙️ 更多选项...",
      imagesField: "🖼️ 图片",
      confirmBtn: "✅ 确认",
      cancelBtn: "❌ 取消",
      refreshBtn: "🔄 刷新",
    },
    endCmd: {
      permissionError: "❌ 你需要 `管理员` 权限才能使用该指令",
      cantFindGiveaway: "🤔 找不到 ID 为 `<query>` 的抽奖！",
      already: "❌ [抽奖](<giveawaymsg>) 已结束！",
      success: "✅ [抽奖](<giveawaymsg>) 已成功结束！",
    },
    rerollCmd: {
      permissionError: "❌ 你需要 `管理员` 权限才能使用该指令",
      cantFindGiveaway: "🤔 找不到 ID 为 `<query>` 的抽奖！",
      notEnd: "❌ [抽奖](<giveawaymsg>) 尚未结束！",
      messages: {
        congrat:
          "🎉 新的中奖者：{winners}！恭喜获得 **{this.prize}**！\n{this.messageURL}",
        error: "😥 没有有效参与者，无法选出新中奖者！",
      },
      success: "✅ 已重新抽奖：[抽奖](<giveawaymsg>)",
    },
    listCmd: {
      noGiveaway: "🤔 服务器中当前没有正在进行的抽奖！",
      error: "❌ 数据库当前不可用（已断开）！",
    },
    editCmd: {
      permissionError: "❌ 你需要 `管理员` 权限才能使用该指令",
      cantFindGiveaway: "🤔 找不到 ID 为 `<query>` 的抽奖！",
      isEnd: "❌ [抽奖](<giveawaymsg>) 已结束，无法编辑！",
      editGiveawaySuccess: "✅ [抽奖](<giveawaymsg>) 已成功编辑！",
      unvalidDuration: "❌ 请输入有效的持续时间！",

      embedTitle: "🎛️ 编辑抽奖",
      embedDesc: "抽奖 ID：`<id>`",
      prizeField: "🎁 奖品",
      prizeFieldDesc: "编辑抽奖奖品",
      durationField: "⏳ 时长",
      durationFieldDesc: "增加或减少时长",
      winnersField: "👥 中奖人数",
      winnersFieldDesc: "编辑中奖人数",
      mediaField: "🖼️ 媒体",
      mediaFieldDesc: "添加或编辑图片/缩略图",

      prizeBtn: "奖品",
      durationBtn: "时长",
      winnersBtn: "中奖人数",
      mediaBtn: "媒体",

      mediaEmbedTitle: "🖼️ 媒体选项",
      mediaEmbedDesc: "管理抽奖 ID 为 `<id>` 的图片/缩略图",
      mediaSelectPlaceholder: "请选择一个选项",
      mediaSelectThumbnail: "添加/编辑缩略图",
      mediaSelectImage: "添加/编辑图片",
      backBtn: "🔙 返回",

      modalPrizeTitle: "编辑奖品",
      modalPrizeDesc: "请输入新奖品",
      modalDurationTitle: "编辑时长",
      modalDurationDesc: "请输入新时长（例如：1h，-10m）",
      modalWinnersTitle: "编辑中奖人数",
      modalWinnersDesc: "请输入新的中奖人数",
      modalInvalidWinners: "❌ 请输入有效的中奖人数（大于 0）",
      modalEditSelect: "编辑 <selected>",
      modalEditInput: "请输入新的 <selected> 内容",
    },
    deleteCmd: {
      permissionError: "❌ 你需要 `管理员` 权限才能使用该指令",
      cantFindGiveaway: "🤔 找不到 ID 为 `<query>` 的抽奖！",
      deleteGiveawaySuccess: "✅ 抽奖已成功删除！",
    },
    cleanCmd: {
      error: "❌ 无法删除服务器中的所有抽奖",
      success: "✅ 已成功删除所有抽奖！",
    },
  },
  giveawayEvents: {
    endedGiveawayReactionAdded: {
      content: "嘿 <user>",
      description:
        "你参与的 [抽奖](<giveawaymsg>) 已经结束了 :sob:\n\n下次请早点参与！",
    },
    giveawayEnded: {
      title: "🎉 恭喜 <user>！",
      description:
        "你赢得了 **<prize>**！\n\n[点击这里查看结果](<giveawaymsg>)",
    },
    giveawayReactionAdded: {
      yEmbed: {
        title: "🎉 你已参与抽奖：`<prize>`",
        description:
          "[点击查看结果](<giveawaymsg>)\n\n**[邀请我](https://top.gg/bot/909386183107305504/invite) | [投票赢得 25% 抽奖加成](https://top.gg/bot/909386183107305504/vote)**",
      },
      nEmbed: {
        title: "🎉 你无法参与抽奖：`<prize>`",
        description:
          "[点击查看参与要求](<giveawaymsg>)\n\n如果你已满足要求但无法加入，请加入 **[支持服务器](https://discord.gg/y97MvVyrwC)** 向开发者反馈！",
      },
    },
    giveawayReactionRemoved: {
      title: "你已退出抽奖：`<prize>`",
      description:
        "[若想重新加入，请点击这里](<giveawaymsg>)\n\n**[邀请我](https://top.gg/bot/909386183107305504/invite) | [投票赢得 25% 抽奖加成](https://top.gg/bot/909386183107305504/vote)**",
    },
    giveawayRerolled: {
      title: "🎉 恭喜 <user>！",
      description:
        "主持人重新抽奖后你赢得了 **<prize>**！\n[点击这里查看结果！](<giveawaymsg>)",
    },
  },

  bugs: "感谢你报告使用过程中遇到的错误，问题将在未来修复！\n\n:warning: 如果你报告的内容不是 bug，我们有权封禁你的报告权限。",

  settings: {
    noPremium:
      "你必须购买 [Premium Starsky](https://www.patreon.com/midora) 才能使用此指令",
    color: {
      unvalid: "❌ 请输入有效的十六进制颜色代码",
      success: "✅ 颜色已成功更改为：<color>",
      error: "❌ 无法更改颜色",
    },
    emoji: {
      unvalid: "❌ 请输入有效的表情符号",
      success: "✅ 表情已成功更改为：<emoji>",
      cancel: "❌ 操作已取消",
      content: "你确定要将表情更改为 <emoji> 吗？",
      error: "❌ 1 分钟内未确认，操作已取消",
    },
    logNoChannel: "尚未设置日志频道",
    embed: {
      title: "<server> 的服务器设置",
      emoji: "抽奖表情",
      lang: "语言",
      color: "抽奖颜色",
      premium: "Premium",
      logger: "日志记录",
      loggerChannel: "日志频道",
      isEnable: {
        true: "启用",
        false: "禁用",
      },
      yes: "是",
      no: "否",
    },
  },

  logging: {
    enabled: "✅ 日志系统已启用！",
    alreadyEnabled: "❌ 日志系统已启用！",
    alreadyDisabled: "❌ 日志系统已禁用！",
    disabled: "✅ 日志系统已禁用！",
    notEnabled: "❌ 请先启用日志系统再使用该指令！",
    channelSuccess: "✅ 日志频道已成功设置为 <channel>",
  },

  autoresponder: {
    maxAutoresponderReached:
      "❌ 你已达到自动回复触发器的最大数量（<numberTrigger> 个）！",
    created:
      "✅ 自动回复已创建！\n- 触发词：<trigger>\n- 回复内容：<response>\n- 通配符：<wc>",
    exists:
      "❌ 自动回复已存在！\n- 触发词：<trigger>\n- 回复内容：<response>\n- 通配符：<wc>",
    notFound: "❌ 找不到触发词为 `<trigger>` 的自动回复！",
    removed: "✅ 自动回复已删除！",
    noAutoresponder: "❌ 当前没有自动回复！",
    deletedAll: "✅ 所有自动回复已成功删除！",
    variables: {
      user: "触发指令的用户的提及。例如：Hello {user}！",
      avatar: "用户头像。例如：看下 {username} 的头像！{avatar}",
      username: "用户名。例如：你好，{username}！",
      channel: "频道名称。例如：查看 {channel}！",
      server: "服务器名称。例如：欢迎来到 {server}！",
    },
    wildcardEnabled: "通配符已启用",
    wildcardDisabled: "通配符已禁用",
  },

  blacklist: {
    added: "✅ 已成功将 <user> 加入本服务器所有抽奖的黑名单。",
    removed: "✅ 已成功将 <user> 从本服务器抽奖黑名单中移除。",
    empty: "当前没有用户被加入抽奖黑名单。",
    list: "📄 **被加入黑名单的用户列表：**\n<list>",
    giveawayBlacklisted: "🚫 你已被列入本服务器的抽奖黑名单！",
  },

  timedif: {
    invalid: "❌ 这不是有效的 Discord Snowflake！",
    tooLarge: "❌ 时间差过大，无法精确计算。",
    between: "显示两个 ID 之间的时间差",
    single: "显示该 ID 与当前消息 ID 的时间差",
  },

  help: {
    menuTitle: "<bot> 的帮助菜单",
    menuDescription:
      "使用下方按钮在不同类别和命令之间切换。\n\n需要更多帮助？加入我们的 [支持服务器](https://discord.gg/y97MvVyrwC) 或使用下方按钮。",
    invite: "邀请",
    support: "支持",
    vote: "投票",
    premium: "高级",
    expired: "⌛ 会话已过期。请再次使用 </help:{id}> 重新打开。",
    notForYou: "此菜单不属于你。",
    noCommands: "未找到命令。",
    noDescription: "无描述",
    pageFooter: "第 {current} 页 / 共 {total} 页",
    homeFooter:
      "⭐ 帮助 Starsky 达到 100 个服务器，享受 Premium 五折优惠！ - 第 1 页 / 共 {total} 页",
    homeDescription:
      "<@{botId}> 是一款来自 🇻🇳 越南的高级 Discord 抽奖机器人\n\n> **可用分类：**\n{categories}\n\n使用下方按钮切换页面。",
  },

  botinfo: {
    embedDescription:
      "👋 你好，我是 **<username>**，一款高级 Discord 抽奖机器人！",
    embedTitle: "<username> - 信息",
    developer: "🤓 开发者",
    library: "📚 库",
    guilds: "🌐 服务器",
    users: "👥 用户",
    latency: "⏱️ 延迟",
    apiLatency: "🏓 API 延迟",
  },
};
