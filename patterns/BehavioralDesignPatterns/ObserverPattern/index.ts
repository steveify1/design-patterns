import { GlobalStateManager } from "./publisher";
import { Profile } from "./subscriber1";
import { Subscriber2 } from "./subscriber2";
import { Category } from "./subscriber3";

const redux = GlobalStateManager.createStateManager();

const profile = new Profile(redux);
const subscriber2 = new Subscriber2(redux);
const category = new Category(redux);

profile.updateProfile({
    firstName: "Stephen",
    role: 'admins'
});
