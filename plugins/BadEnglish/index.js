module.exports = (Plugin, Library) => {
    const {Patcher, Logger, DiscordModules} = Library;
    return class badEnglishPlugin extends Plugin {
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
            msg.content += " (Sorry for bad English)";
        }
    }
}