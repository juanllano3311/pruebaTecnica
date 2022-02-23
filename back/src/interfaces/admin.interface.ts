import { Document } from 'mongoose'

export interface AdminInterface extends Document {
    readonly email: string;
    readonly passworf: string;
}