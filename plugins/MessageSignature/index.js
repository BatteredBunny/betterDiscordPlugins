module.exports = (Plugin, Library) => {
    const {Patcher, Logger, DiscordModules, Settings} = Library;
    return class MessageSignaturePlugin extends Plugin {
        constructor() {
            super();
            this.defaultSettings = {};

            this.defaultSettings.prefix = "";
            this.defaultSettings.suffix = " (Sorry for bad English)";
        }

        getSettingsPanel() {
            return Settings.SettingPanel.build(this.saveSettings.bind(this),
                new Settings.Textbox("Prefix", "Text to prepend to message", this.settings.prefix, (e) => {this.settings.prefix = e;}),
                new Settings.Textbox("Suffix", "Text to append to message", this.settings.suffix, (e) => {this.settings.suffix = e;}),
            );
        }

        onStart() {
            Logger.log("Starting");
            Patcher.after(
                DiscordModules.MessageActions,
                "sendMessage",
                this.append_to_message.bind(this)
            );
        }

        onStop() {
            Logger.log("Stopping");
            Patcher.unpatchAll();
        }

        append_to_message(channel, msg_info, send_status) {
            const [channel_id, msg, ..._] = msg_info;
            msg.content = this.settings.prefix + msg.content + this.settings.suffix;
        }
    }
}