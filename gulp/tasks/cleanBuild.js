import { deleteAsync } from "del";

export const clean = () => {
    return deleteAsync(app.paths.clean);
}