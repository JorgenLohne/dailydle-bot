import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
    discord_server_profile_name: String,
    discord_name: String,
    discord_id: String,
    type: String,
    type_day_number: String,
    score: String,
}, {
timestamps: true
}
)

const Entry = mongoose.model("Entry", entrySchema)

export default Entry;