module.exports = {
  error: "❌ An error occurred. Please try again later!",
  interactionCreate: {
    errorCmd:
      "Command `<command>` not found. Please join our [support server](https://discord.gg/y97MvVyrwC) to report this issue.",
    onCooldown:
      "Hey <user>, please wait **<t:<duration>:R>** before using this command again.",
    permissionError:
      "I lack the `Administrator` permission required to run this command.",
  },
  hasVoted:
    "You must vote for me on [Top.gg](<link>) or purchase [Premium Starsky](https://www.patreon.com/midora) to use this command.",
  giveaway: {
    creatingPanel: "✅ Giveaway creation started. Sending setup panel...",

    errorPrizeDuration:
      "❌ You must set both the prize and duration before confirming.",

    //---------------------------------------------//
    errorYourSession: "❌ This is not your current giveaway creation session.",
    invalidChannel: "❌ Invalid channel selected. Only text channels are supported.",
    panelNotFound: "❌ Giveaway panel channel or message not found.",
    panelMsgFetchFail: "❌ Failed to fetch the giveaway panel message.",
    //---------------------------------------------//

    //---------------------------------------------//
    selectHostPlaceholder: "Select the host user",
    selectHostContent: "👑 Choose the host user:",

    selectRolePlaceholder: "Select a required role",
    selectRoleContent: "🔒 Choose the required role:",

    modalWinnersTitle: "Set Number of Winners",
    modalWinnersLabel: "Enter the number of winners",

    modalDescriptionTitle: "Set Description",
    modalServerTitle: "Set Server",

    modalValueLabel: "Enter a value",

    modalImagesTitle: "Set Images",
    modalThumbnailLabel: "Thumbnail URL",
    modalImageLabel: "Main Image URL",

    modalBonusTitle: "Bonus Role Settings",
    modalBonusRoleLabel: "Bonus Role ID",
    modalBonusAmountLabel: "Bonus Entry Amount",
    //---------------------------------------------//

    //---------------------------------------------//
    errorInvalidDuration: "❌ Invalid duration format.",
    errorInvalidWinners: "❌ Invalid number of winners.",
    errorInvalidThumbnail:
      "❌ Invalid <type>: must start with http:// or https://, end with .png, .jpg, .jpeg, or .gif, and be under 2048 characters.",
    errorInvalidBonusAmount: "❌ Invalid bonus amount.",
    //---------------------------------------------//

    //---------------------------------------------//
    selectChannelPlaceholder: "Select a channel",
    selectChannelText: "📢 Select the giveaway channel:",
    setTitle: "Set",
    enterValueLabel: "Enter value",
    cancelled: "❌ Giveaway creation cancelled and panel deleted.",
    panelRefreshed: "🔄 Panel refreshed!",
    panelRefreshFailed: "❌ Failed to refresh the panel.",
    fifteenMinTimer: "This panel will expire in 15 minutes.",
    //---------------------------------------------//

    createCmd: {
      permissionError:
        "❌ You need `Administrator` permission to use this command.",
      invalidTime: "❌ Please select a valid duration (e.g., 10s, 1m, 1h, 1d).",
      invalidWinner:
        "❌ Please enter a valid number of winners (minimum 1).",
      serverCheckEmbedUnsuccess:
        "😳 Starsky is not in the server for this invite: [<value>](<invite>).",
      serverCheckEmbedSuccess:
        "✅ Server requirement set! Starsky is in the server for invite: [<value>](<invite>).",
      giveawayStart: "✅ Giveaway started in <channel>!",
      invalidInvite: "🤔 Unable to find that server.",
      tooManyWinners:
        "❌ Too many winners specified! Maximum is 20 winners (40 with [Premium Starsky](https://www.patreon.com/midora)).",
      tooLongTime:
        "❌ Duration exceeds 2 weeks! (4 weeks max with [Premium Starsky](https://www.patreon.com/midora)).",
      tooShortTime: "❌ Duration must be at least 1 minute.",
      maxGiveawaysReached:
        "❌ Your server has reached the maximum number of giveaways (20). Please wait for some to end before creating new ones! (50 max with [Premium Starsky](https://www.patreon.com/midora)).",
      tooManyWinnersPremium:
        "❌ Too many winners specified! Maximum is 40 winners.",
      tooLongTimePremium: "❌ Duration exceeds 4 weeks!",
      maxGiveawaysReachedPremium:
        "❌ Your server has reached the maximum number of giveaways (50). Please wait for some to end before creating new ones.",
      invalidThumbnail: "❌ Invalid thumbnail URL.",
      invalidImage: "❌ Invalid image URL.",
      messages: {
        inviteToParticipate: "**React with <reaction> to participate!**",
        partDescription: "<description>",
        partRequirementsTitle: "**Requirements:**",
        partRole: "- Role: <role>",
        partServer: "- Server: [Click to join](<invite>)",
      },
      bonus: {
        entries:
          "❌ You must specify how many bonus entries <bonusRole> will receive!",
        embedDescription:
          "**<bonusRole>** has **<bonusEntries>** extra entries in this giveaway!",
      },

      // Giveaway Create UI
      embedTitle: "🎉 Giveaway Creation",
      embedDescription: "Use the buttons and menus below to configure giveaway options.",
      prizeField: "🎁 Prize",
      durationField: "⏳ Duration",
      winnersField: "🏆 Winners",
      channelField: "📢 Channel",
      roleReqField: "🔒 Role Requirement",
      serverReqField: "🌐 Server Requirement",
      bonusRoleField: "🎖️ Bonus Role",
      bonusAmountField: "➕ Bonus Amount",
      hostField: "👑 Host",
      descriptionField: "📝 Description",
      thumbnailField: "🖼️ Thumbnail",
      imageField: "📷 Image",
      endsAtField: "📅 Ends At",
      extraDataField: "📎 Extra Data",
      giveawayId: "Giveaway ID: <id>",
      serverReq: "- Server Requirement",
      roleReq: "- Role Requirement",
      createdGiveaway: "🎉 Giveaway Created",
      na: "N/A",
      unknown: "Unknown",
      unknownRole: "Unknown Role",
      notSet: "Not set",
      none: "None",
      prizeBtn: "🎁 Prize",
      durationBtn: "⏳ Duration",
      channelBtn: "📢 Channel",
      moreOptionsPlaceholder: "⚙️ More options...",
      imagesField: "🖼️ Images",
      confirmBtn: "✅ Confirm",
      cancelBtn: "❌ Cancel",
      refreshBtn: "🔄 Refresh",
    },
    endCmd: {
      permissionError:
        "❌ You need `Administrator` permission to use this command.",
      cantFindGiveaway:
        "🤔 Unable to find a giveaway with message ID: `<query>`.",
      already: "❌ [Giveaway](<giveawaymsg>) has already ended.",
      success: "✅ [Giveaway](<giveawaymsg>) has been ended successfully.",
    },
    rerollCmd: {
      permissionError:
        "❌ You need `Administrator` permission to use this command.",
      cantFindGiveaway:
        "🤔 Unable to find a giveaway with message ID: `<query>`.",
      notEnd: "❌ [Giveaway](<giveawaymsg>) has not ended yet.",
      messages: {
        congrat:
          "🎉 New winner(s): {winners}! Congratulations, you won **{this.prize}**!\n{this.messageURL}",
        error: "😥 No valid entries found; no new winners can be selected.",
      },
      success: "✅ Giveaway [rerolled](<giveawaymsg>) successfully.",
    },
    listCmd: {
      noGiveaway: "🤔 There are no active giveaways in this server currently.",
      error: "❌ The bot's database is currently disconnected.",
    },
    editCmd: {
      permissionError:
        "❌ You need `Administrator` permission to use this command.",
      cantFindGiveaway:
        "🤔 Unable to find a giveaway with message ID: `<query>`.",
      isEnd: "❌ [Giveaway](<giveawaymsg>) has already ended and cannot be edited.",
      editGiveawaySuccess: "✅ [Giveaway](<giveawaymsg>) has been updated successfully.",
      unvalidDuration: "❌ Please enter a valid duration.",

      embedTitle: "🎛️ Edit Giveaway",
      embedDesc: "Giveaway ID: `<id>`",
      prizeField: "🎁 Prize",
      prizeFieldDesc: "Edit the giveaway prize",
      durationField: "⏳ Duration",
      durationFieldDesc: "Add or subtract time",
      winnersField: "👥 Winners",
      winnersFieldDesc: "Edit the number of winners",
      mediaField: "🖼️ Media",
      mediaFieldDesc: "Add or edit image or thumbnail",

      prizeBtn: "Prize",
      durationBtn: "Duration",
      winnersBtn: "Winners",
      mediaBtn: "Media",

      mediaEmbedTitle: "🖼️ Media Options",
      mediaEmbedDesc: "Manage image/thumbnail for giveaway ID: `<id>`",
      mediaSelectPlaceholder: "Choose an option",
      mediaSelectThumbnail: "Add/Edit Thumbnail",
      mediaSelectImage: "Add/Edit Image",
      backBtn: "🔙 Back",

      modalPrizeTitle: "Edit Prize",
      modalPrizeDesc: "Enter the new prize for the giveaway",
      modalDurationTitle: "Edit Duration",
      modalDurationDesc: "Enter the new duration (e.g., 1h, -10m)",
      modalWinnersTitle: "Edit Winners",
      modalWinnersDesc: "Enter the new number of winners",
      modalInvalidWinners:
        "❌ Please enter a valid number of winners (greater than 0).",
      modalEditSelect: "Edit <selected>",
      modalEditInput: "Enter the new <selected> URL",
    },
    deleteCmd: {
      permissionError:
        "❌ You need `Administrator` permission to use this command.",
      cantFindGiveaway:
        "🤔 Unable to find a giveaway with message ID: `<query>`.",
      deleteGiveawaySuccess: "✅ Giveaway deleted successfully.",
    },
    cleanCmd: {
      error: "❌ Unable to delete all giveaways in this server.",
      success: "✅ All giveaways deleted successfully.",
    },
  },
  giveawayEvents: {
    endedGiveawayReactionAdded: {
      content: "Hey <user>,",
      description:
        "The [giveaway](<giveawaymsg>) you reacted to has already ended. :sob:\n\nBetter luck next time!",
    },
    giveawayEnded: {
      title: "🎉 Congratulations <user>!",
      description:
        "You won **<prize>**!\n\n[Click here to view the results.](<giveawaymsg>)",
    },
    giveawayReactionAdded: {
      yEmbed: {
        title: "🎉 You joined the giveaway: `<prize>`",
        description:
          "[Click here to view the results.](<giveawaymsg>)\n\n**[Invite me](https://top.gg/bot/909386183107305504/invite) | [Vote to get 25% extra giveaway wins](https://top.gg/bot/909386183107305504/vote)**",
      },
      nEmbed: {
        title: "🎉 You cannot participate in the giveaway: `<prize>`",
        description:
          "[Click here to check the requirements.](<giveawaymsg>)\n\nIf you meet the requirements but cannot join, please report it in our **[support server](https://discord.gg/y97MvVyrwC)**.",
      },
    },
    giveawayReactionRemoved: {
      title: "You left the giveaway: `<prize>`",
      description:
        "[Click here if you want to rejoin.](<giveawaymsg>)\n\n**[Invite me](https://top.gg/bot/909386183107305504/invite) | [Vote to get 25% extra giveaway wins](https://top.gg/bot/909386183107305504/vote)**",
    },
    giveawayRerolled: {
      title: "🎉 Congratulations <user>!",
      description:
        "The host rerolled the giveaway, and you won **<prize>**!\n[Click here to see the results.](<giveawaymsg>)",
    },
  },
  bugs:
    "Thank you for reporting a bug. We will fix it as soon as possible.\n\n:warning: Please note, reporting non-bugs may result in a ban from submitting reports.",
  settings: {
    noPremium:
      "You must purchase [Premium Starsky](https://www.patreon.com/midora) to use this command.",
    color: {
      unvalid: "❌ Please enter a valid hexadecimal color code.",
      success: "✅ Successfully changed color to: <color>.",
      error: "❌ Failed to change the color.",
    },
    emoji: {
      unvalid: "❌ Please enter a valid emoji.",
      success: "✅ Successfully changed emoji to: <emoji>.",
      cancel: "❌ Action cancelled.",
      content: "Are you sure you want to change the emoji to <emoji>?",
      error: "❌ Confirmation not received within 1 minute; action cancelled.",
    },
    logNoChannel: "No log channel has been set up yet.",
    embed: {
      title: "Server Settings for <server>",
      emoji: "Giveaway Emoji",
      lang: "Language",
      color: "Giveaway Color",
      premium: "Premium",
      logger: "Logger",
      loggerChannel: "Logger Channel",
      isEnable: {
        true: "<:starsky_tick:967718060276477992> Enabled",
        false: "<:starsky_x:967718060062552074> Disabled",
      },
      yes: "Yes",
      no: "No",
    },
  },
  logging: {
    enabled: "✅ Logger enabled.",
    alreadyEnabled: "❌ Logger is already enabled.",
    alreadyDisabled: "❌ Logger is already disabled.",
    disabled: "✅ Logger disabled.",
    notEnabled: "❌ Please enable the logger before using this command.",
    channelSuccess: "✅ Logger channel set to <channel> successfully.",
  },
  autoresponder: {
    maxAutoresponderReached:
      "❌ You have reached the maximum number of triggers allowed! (<numberTrigger> triggers).",
    created:
      "✅ Autoresponder created!\n- Trigger: <trigger>\n- Response: <response>\n- Wildcard: <wc>",
    exists:
      "❌ Autoresponder already exists!\n- Trigger: <trigger>\n- Response: <response>\n- Wildcard: <wc>",
    notFound: "❌ Autoresponder with trigger `<trigger>` not found.",
    removed: "✅ Autoresponder removed.",
    noAutoresponder: "❌ No autoresponders found.",
    deletedAll: "✅ All autoresponders deleted successfully.",
    variables: {
      user: "Mention of the user who triggered the command. E.g., Hello {user}!",
      avatar: "User's avatar. E.g., Check out {username}'s avatar! {avatar}",
      username: "User's name. E.g., Hello {username}!",
      channel: "Channel name. E.g., Check out {channel}!",
      server: "Server name. E.g., Welcome to {server}!",
    },
    wildcardEnabled: "Wildcard enabled.",
    wildcardDisabled: "Wildcard disabled.",
  },
  blacklist: {
    added:
      "✅ Successfully blacklisted <user> from all giveaways in this server.",
    removed:
      "✅ Successfully removed <user> from the giveaway blacklist in this server.",
    empty: "No users are currently blacklisted from giveaways in this server.",
    list: "📄 **Blacklisted users:**\n<list>",
    giveawayBlacklisted: "🚫 You are blacklisted from giveaways in this server.",
  },
  timedif: {
    invalid: "❌ This does not appear to be a valid Discord snowflake ID.",
    tooLarge: "❌ Time difference is too large to calculate accurately.",
    between: "Showing time difference between the two given IDs.",
    single: "Showing time difference between the given ID and the command message ID.",
  },
  help: {
    menuTitle: "<bot>'s Help Menu",
    menuDescription:
      "Use the buttons below to navigate between categories and commands.\n\nNeed more help? Join our [support server](https://discord.gg/y97MvVyrwC) or use the buttons below.",
    invite: "Invite",
    support: "Support",
    vote: "Vote",
    premium: "Premium",
    expired:
      "⌛ Help session expired. Use </help:{id}> again to reopen.",
    notForYou: "This menu is not for you.",
    noCommands: "No commands found.",
    noDescription: "No description available.",
    pageFooter: "Page {current} of {total}",
    homeFooter:
      "⭐ Help Starsky reach 100 servers for a 50% discount on Premium! - Page 1 of {total}",
    homeDescription:
      "<@{botId}> is an advanced Discord giveaway bot made in 🇻🇳\n\n> **Available Categories:**\n{categories}\n\nUse the buttons below to navigate between pages.",
  },
  botinfo: {
    embedDescription:
      "👋 Hi, I'm **<username>**, an advanced Discord giveaway bot!",
    embedTitle: "<username> - Information",
    developer: "🤓 Developer",
    library: "📚 Library",
    guilds: "🌐 Servers",
    users: "👥 Users",
    latency: "⏱️ Latency",
    apiLatency: "🏓 API Latency",
  },
};
