module.exports = {
  error: "❌ Đã xảy ra lỗi. Vui lòng thử lại sau!",
  interactionCreate: {
    errorCmd:
      "Không tìm thấy lệnh `<command>`. Vui lòng vào [server hỗ trợ](https://discord.gg/y97MvVyrwC) để báo lỗi!",
    onCooldown:
      "Này <user>, vui lòng đợi thêm **<t:<duration>:R>** trước khi dùng lại lệnh!",
    permissionError:
      "Tui không có quyền `Administrator` để dùng lệnh này.",
  },
  hasVoted:
    "Bạn phải vote cho tui trên [Top.gg](<link>) hoặc mua [Premium Starsky](https://www.patreon.com/midora) để dùng lệnh này.",
  giveaway: {
    creatingPanel: "✅ Bắt đầu tạo giveaway. Đang gửi bảng thiết lập...",
    errorPrizeDuration:
      "❌ Phần thưởng và thời gian phải được đặt trước khi xác nhận.",

    errorYourSession: "❌ Đây không phải phiên tạo giveaway của bạn.",
    invalidChannel: "❌ Kênh chọn không hợp lệ. Chỉ hỗ trợ kênh text.",
    panelNotFound:
      "❌ Không tìm thấy kênh hoặc tin nhắn bảng điều khiển giveaway.",
    panelMsgFetchFail: "❌ Lấy tin nhắn bảng điều khiển giveaway thất bại.",

    selectHostPlaceholder: "Chọn người host",
    selectHostContent: "👑 Chọn người host:",

    selectRolePlaceholder: "Chọn vai trò bắt buộc",
    selectRoleContent: "🔒 Chọn vai trò bắt buộc:",

    modalWinnersTitle: "Đặt số người thắng",
    modalWinnersLabel: "Nhập số người thắng",

    modalDescriptionTitle: "Nhập mô tả",
    modalServerTitle: "Nhập máy chủ",

    modalValueLabel: "Nhập giá trị",

    modalImagesTitle: "Đặt ảnh",
    modalThumbnailLabel: "URL Thumbnail",
    modalImageLabel: "URL Ảnh chính",

    modalBonusTitle: "Cài đặt vai trò Bonus",
    modalBonusRoleLabel: "ID vai trò Bonus",
    modalBonusAmountLabel: "Số lượng Bonus Entry",

    errorInvalidDuration: "❌ Thời lượng không hợp lệ.",
    errorInvalidWinners: "❌ Số người thắng không hợp lệ.",
    errorInvalidThumbnail:
      "❌ <type> không hợp lệ: phải bắt đầu bằng http:// hoặc https://, kết thúc bằng .png, .jpg, .jpeg, hoặc .gif, và dài dưới 2048 ký tự.",
    errorInvalidBonusAmount: "❌ Số lượng bonus không hợp lệ.",

    selectChannelPlaceholder: "Chọn kênh",
    selectChannelText: "📢 Chọn kênh giveaway:",
    setTitle: "Thiết lập",
    enterValueLabel: "Nhập giá trị",
    cancelled: "❌ Tạo giveaway đã bị hủy, panel bị xóa.",
    panelRefreshed: "🔄 Đã làm mới panel!",
    panelRefreshFailed: "❌ Không thể làm mới panel.",
    fifteenMinTimer: "Panel này sẽ hết hạn trong 15 phút.",

    createCmd: {
      permissionError: "❌ Bạn cần quyền `Administrator` để dùng lệnh này.",
      invalidTime: "❌ Vui lòng chọn thời gian đúng! Ví dụ: 10s, 1m, 1h, 1d",
      invalidWinner: "❌ Vui lòng chọn số người thắng hợp lệ! Lớn hơn hoặc bằng 1.",
      serverCheckEmbedUnsuccess:
        "😳 Starsky chưa có trong máy chủ với lời mời: [<value>](<invite>)",
      serverCheckEmbedSuccess:
        "✅ Đã đặt yêu cầu máy chủ! Starsky có trong máy chủ với lời mời: [<value>](<invite>)",
      giveawayStart: "✅ Giveaway đã bắt đầu tại <channel>!",
      invalidInvite: "🤔 Không tìm thấy máy chủ đó!",
      toMuchWinner:
        "❌ Số người thắng quá nhiều! (Tối đa 20 winners, Premium Starsky tối đa 40 winners)",
      toMuchTime:
        "❌ Thời gian quá dài! (Tối đa 2 tuần, Premium Starsky tối đa 4 tuần)",
      lessTime: "❌ Thời gian phải ít nhất 1 phút!",
      maxGiveawaysReached:
        "❌ Máy chủ đã đạt giới hạn 20 giveaways. Vui lòng đợi một số kết thúc trước khi tạo mới! (Premium Starsky tối đa 50 giveaways)",
      toMuchWinnerPremium: "❌ Số người thắng quá nhiều! (Tối đa 40 winners)",
      toMuchTimePremium: "❌ Thời gian quá dài! (Tối đa 4 tuần)",
      maxGiveawaysReachedPremium:
        "❌ Máy chủ đã đạt giới hạn 50 giveaways. Vui lòng đợi một số kết thúc trước khi tạo mới!",
      invalidThumbnail: "❌ URL Thumbnail không hợp lệ",
      invalidImage: "❌ URL ảnh không hợp lệ",
      messages: {
        inviteToParticipate: "**Nhấn <reaction> để tham gia!**",
        partDescription: "<description>",
        partRequirementsTitle: "**Yêu cầu tham gia:**",
        partRole: "- Vai trò: <role>",
        partServer: "- Máy chủ: [Nhấn để tham gia](<invite>)",
      },
      bonus: {
        entries:
          "❌ Bạn phải chỉ định số bonus entries <bonusRole> được nhận!",
        embedDescription:
          "**<bonusRole>** có **<bonusEntries>** extra entries trong giveaway này!",
      },

      embedTitle: "🎉 Tạo Giveaway",
      embedDescription:
        "Dùng nút và menu bên dưới để thiết lập giveaway.",
      prizeField: "🎁 Phần thưởng",
      durationField: "⏳ Thời hạn",
      winnersField: "🏆 Người thắng",
      channelField: "📢 Kênh",
      roleReqField: "🔒 Yêu cầu vai trò",
      serverReqField: "🌐 Yêu cầu máy chủ",
      bonusRoleField: "🎖️ Vai trò Thưởng",
      bonusAmountField: "➕ Số lượng Thưởng",
      hostField: "👑 Chủ sở hữu",
      descriptionField: "📝 Mô tả",
      thumbnailField: "🖼️ Thumbnail",
      imageField: "📷 Ảnh",
      endsAtField: "📅 Kết thúc lúc",
      extraDataField: "📎 Dữ liệu bổ sung",
      giveawayId: "Giveaway ID: <id>",
      serverReq: "- Yêu cầu máy chủ",
      roleReq: "- Yêu cầu vai trò",
      createdGiveaway: "🎉 Giveaway đã được tạo",
      na: "Không có",
      unknown: "Không rõ",
      unknownRole: "Vai trò không rõ",
      notSet: "Chưa đặt",
      none: "Không có",
      prizeBtn: "🎁 Phần thưởng",
      durationBtn: "⏳ Thời hạn",
      channelBtn: "📢 Kênh",
      moreOptionsPlaceholder: "⚙️ Tuỳ chọn khác...",
      imagesField: "🖼️ Ảnh",
      confirmBtn: "✅ Xác nhận",
      cancelBtn: "❌ Huỷ",
      refreshBtn: "🔄 Làm mới",
    },
    endCmd: {
      permissionError: "❌ Bạn cần quyền `Administrator` để dùng lệnh này.",
      cantFindGiveaway: "🤔 Không tìm thấy giveaway với message ID: `<query>`!",
      already: "❌ [Giveaway](<giveawaymsg>) này đã kết thúc!",
      success: "✅ [Giveaway](<giveawaymsg>) đã kết thúc!",
    },
    rerollCmd: {
      permissionError: "❌ Bạn cần quyền `Administrator` để dùng lệnh này.",
      cantFindGiveaway: "🤔 Không tìm thấy giveaway với message ID: `<query>`!",
      notEnd: "❌ [Giveaway](<giveawaymsg>) chưa kết thúc!",
      messages: {
        congrat:
          "🎉 Chúc mừng {winners}, bạn là người chiến thắng mới! Bạn đã thắng **{this.prize}**!\n{this.messageURL}",
        error: "😥 Giveaway không thể reroll vì không có người thắng ngoài bạn!",
      },
      success: "✅ Reroll thành công [giveaway](<giveawaymsg>)",
    },
    listCmd: {
      noGiveaway:
        "🤔 Hiện không có giveaway nào đang hoạt động trong máy chủ!",
      error: "❌ Database bot hiện không hoạt động (DISCONNECTED)!",
    },
    editCmd: {
      permissionError: "❌ Bạn cần quyền `Administrator` để dùng lệnh này.",
      cantFindGiveaway: "🤔 Không tìm thấy giveaway với message ID: `<query>`!",
      isEnd: "❌ [Giveaway](<giveawaymsg>) đã kết thúc!",
      editGiveawaySuccess: "✅ [Giveaway](<giveawaymsg>) đã được chỉnh sửa!",
      unvalidDuration: "❌ Vui lòng chọn thời hạn hợp lệ!",

      embedTitle: "🎛️ Chỉnh sửa Giveaway",
      embedDesc: "Giveaway ID: `<id>`",
      prizeField: "🎁 Phần thưởng",
      prizeFieldDesc: "Chỉnh sửa phần thưởng giveaway",
      durationField: "⏳ Thời hạn",
      durationFieldDesc: "Thêm hoặc giảm thời gian",
      winnersField: "👥 Số người thắng",
      winnersFieldDesc: "Chỉnh sửa số người thắng",
      mediaField: "🖼️ Ảnh",
      mediaFieldDesc: "Thêm hoặc chỉnh sửa ảnh/thumbnail",

      prizeBtn: "Phần thưởng",
      durationBtn: "Thời hạn",
      winnersBtn: "Số người thắng",
      mediaBtn: "Ảnh",

      mediaEmbedTitle: "🖼️ Tuỳ chọn Ảnh",
      mediaEmbedDesc: "Quản lý ảnh/thumbnail cho giveaway ID: `<id>`",
      mediaSelectPlaceholder: "Chọn tuỳ chọn",
      mediaSelectThumbnail: "Thêm/Chỉnh sửa Thumbnail",
      mediaSelectImage: "Thêm/Chỉnh sửa Ảnh",
      backBtn: "🔙 Quay lại",

      modalPrizeTitle: "Chỉnh sửa phần thưởng",
      modalPrizeDesc: "Nhập phần thưởng mới",
      modalDurationTitle: "Chỉnh sửa thời gian",
      modalDurationDesc: "Nhập thời gian mới (vd: 1h, -10m)",
      modalWinnersTitle: "Chỉnh sửa số người thắng",
      modalWinnersDesc: "Nhập số người thắng mới",
      modalInvalidWinners:
        "❌ Vui lòng nhập số người thắng hợp lệ (lớn hơn 0)",
      modalEditSelect: "Chỉnh sửa <selected>",
      modalEditInput: "Nhập URL mới cho <selected>",
    },
    deleteCmd: {
      permissionError: "❌ Bạn cần quyền `Administrator` để dùng lệnh này.",
      cantFindGiveaway: "🤔 Không tìm thấy giveaway với message ID: `<query>`!",
      deleteGiveawaySuccess: "✅ Đã xóa giveaway thành công!",
    },
    cleanCmd: {
      error: "❌ Tui không thể xóa tất cả giveaways trong máy chủ này.",
      success: "✅ Đã xóa tất cả giveaway thành công!",
    },
  },
  giveawayEvents: {
    endedGiveawayReactionAdded: {
      content: "Này <user>",
      description:
        "[Giveaway](<giveawaymsg>) đã kết thúc rồi :sob:\n\nLần sau nhanh tay hơn nhé!",
    },
    giveawayEnded: {
      title: "🎉 Chúc mừng bạn <user>!",
      description:
        "Bạn đã thắng **<prize>**!\n\n[Click để xem kết quả](<giveawaymsg>)",
    },
    giveawayReactionAdded: {
      yEmbed: {
        title: "🎉 Bạn đã tham gia giveaway: `<prize>`",
        description:
          "[Click để xem kết quả](<giveawaymsg>)\n\n**[Invite me](https://top.gg/bot/909386183107305504/invite) | [Vote để nhận 25% extra win giveaway](https://top.gg/bot/909386183107305504/vote)**",
      },
      nEmbed: {
        title: "🎉 Bạn không thể tham gia giveaway: `<prize>`",
        description:
          "[Click xem yêu cầu lại](<giveawaymsg>)\n\nNếu đã làm đủ nhưng không thể tham gia, join **[server hỗ trợ](https://discord.gg/y97MvVyrwC)** để báo với dev nhé!",
      },
    },
    giveawayReactionRemoved: {
      title: "🎉 Bạn đã rời khỏi giveaway: `<prize>`",
      description:
        "[Click để tham gia lại](<giveawaymsg>)\n\n**[Invite me](https://top.gg/bot/909386183107305504/invite) | [Vote để nhận 25% extra win giveaway](https://top.gg/bot/909386183107305504/vote)**",
    },
    giveawayRerolled: {
      title: "🎉 Chúc mừng bạn <user>!",
      description:
        "Giveaway đã được reroll! Bạn thắng **<prize>**!\n\n[Click xem kết quả](<giveawaymsg>)",
    },
  },
  bugs: "Cảm ơn bạn đã report bug. Lỗi sẽ được fix sớm!\n\n:warning: Chúng tôi có thể ban nếu báo cáo không phải bug.",
  settings: {
    noPremium:
      "Bạn phải mua [Premium Starsky](https://www.patreon.com/midora) để dùng lệnh này.",
    color: {
      unvalid: "❌ Vui lòng nhập mã màu hex hợp lệ.",
      success: "✅ Đổi màu thành công: #<color>",
      error: "❌ Không thể đổi màu.",
    },
    emoji: {
      unvalid: "❌ Vui lòng nhập emoji hợp lệ.",
      success: "✅ Đổi emoji thành công: <emoji>",
      cancel: "❌ Đã hủy thành công.",
      content: "Bạn chắc chắn muốn đổi sang emoji <emoji> chứ?",
      error: "❌ Hủy vì không được xác nhận trong 1 phút.",
    },
    logNoChannel: "Chưa thiết lập kênh ghi nhật ký.",
    embed: {
      title: "Cài đặt máy chủ <server>",
      emoji: "Biểu tượng Giveaway",
      lang: "Ngôn ngữ",
      color: "Màu Giveaway",
      premium: "Premium",
      logger: "Ghi nhật ký",
      loggerChannel: "Kênh ghi nhật ký",
      isEnable: {
        true: "<:starsky_tick:967718060276477992> Bật",
        false: "<:starsky_x:967718060062552074> Tắt",
      },
      yes: "Có",
      no: "Không",
    },
  },
  logging: {
    enabled: "✅ Logger đã bật thành công!",
    alreadyEnabled: "❌ Logger đã bật rồi!",
    alreadyDisabled: "❌ Logger đã tắt rồi!",
    disabled: "✅ Logger đã tắt thành công!",
    notEnabled: "❌ Vui lòng bật logger trước khi dùng lệnh này!",
    channelSuccess: "✅ Đã thiết lập kênh logger vào <channel>",
  },
  autoresponder: {
    maxAutoresponderReached:
      "❌ Đã đạt giới hạn triggers tối đa! (<numberTrigger> triggers)",
    created:
      "✅ Đã tạo Autoresponder!\n- Trigger: <trigger>\n- Response: <response>\n- Wildcard: <wc>",
    exists:
      "❌ Autoresponder đã tồn tại!\n- Trigger: <trigger>\n- Response: <response>\n- Wildcard: <wc>",
    notFound: "❌ Không tìm thấy autoresponder với trigger `<trigger>`!",
    removed: "✅ Đã xóa Autoresponder!",
    noAutoresponder: "❌ Không có autoresponder nào!",
    deletedAll: "✅ Đã xóa tất cả autoresponders!",
    variables: {
      user: "Mention người dùng gọi lệnh. Ví dụ: Xin chào {user}!",
      avatar: "Ảnh đại diện người dùng. Ví dụ: Xem avatar {username}: {avatar}",
      username: "Tên người dùng. Ví dụ: Xin chào {username}!",
      channel: "Tên kênh. Ví dụ: Xem {channel}!",
      server: "Tên máy chủ. Ví dụ: Chào mừng đến {server}!",
    },
    wildcardEnabled: "Wildcard đã bật",
    wildcardDisabled: "Wildcard đã tắt",
  },
  blacklist: {
    added:
      "✅ Đã thêm <user> vào danh sách cấm tham gia giveaway trong máy chủ này.",
    removed:
      "✅ Đã gỡ <user> khỏi danh sách cấm tham gia giveaway trong máy chủ này.",
    empty: "Hiện không có ai bị cấm tham gia giveaway trong máy chủ này.",
    list: "📄 **Danh sách người dùng bị cấm tham gia giveaway:**\n<list>",
    giveawayBlacklisted:
      "🚫 Bạn đã bị cấm tham gia giveaway trong máy chủ này!",
  },
  timedif: {
    invalid: "❌ Đây không phải snowflake Discord hợp lệ!",
    tooLarge: "❌ Khoảng thời gian quá lớn để tính chính xác.",
    between: "Hiển thị khoảng cách thời gian giữa hai ID",
    single: "Hiển thị khoảng cách thời gian giữa ID và command ID",
  },
  help: {
    menuTitle: "Menu Trợ Giúp của <bot>",
    menuDescription:
      "Dùng nút bên dưới để chuyển danh mục và lệnh.\n\nCần thêm trợ giúp? Tham gia [server hỗ trợ](https://discord.gg/y97MvVyrwC) hoặc dùng nút dưới.",
    invite: "Mời",
    support: "Hỗ trợ",
    vote: "Vote",
    premium: "Premium",
    expired: "⌛ Phiên trợ giúp hết hạn. Dùng </help:{id}> để mở lại.",
    notForYou: "Không dành cho bạn.",
    noCommands: "Không tìm thấy lệnh.",
    noDescription: "Không có mô tả",
    pageFooter: "Trang {current} trên {total}",
    homeFooter:
      "⭐ Hỗ trợ Starsky đạt 100 máy chủ để nhận ưu đãi premium giảm 50%! - Trang 1 trên {total}",
    homeDescription:
      "<@{botId}> là bot giveaway Discord nâng cao phát triển tại 🇻🇳\n\n> **Danh mục:**\n{categories}\n\nDùng nút để chuyển trang.",
  },
  botinfo: {
    embedDescription:
      "👋 Xin chào, tôi là **<username>**, một Discord bot giveaway nâng cao!",
    embedTitile: "<username> - Thông tin",
    developer: "🤓 Nhà phát triển",
    library: "📚 Thư viện",
    guilds: "🌐 Máy chủ",
    users: "👥 Người dùng",
    latency: "⏱️ Độ trễ",
    apiLatency: "🏓 Độ trễ API",
  },
};
