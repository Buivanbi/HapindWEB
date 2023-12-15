import { Family } from "src/app/model/family.model";
import { Drinking } from "src/app/model/drinking.model";
import { UserMusic } from "./user-music.model";
import { Work } from "src/app/model/work.model";
import { Smoking } from "src/app/model/smoking.model";
import { Purpose } from "src/app/model/purpose.model";
import { Literacy } from "src/app/model/literacy.model";
import { Habit } from "src/app/model/habit.model";
import { Status } from "./status.model";


export class User {
    id: number;
    fullname: string;
    email: string;
    phone: string;
    dob: string;
    gender: string;
    address: string;
    family: Family;
    drinking: Drinking;
    work: Work;
    smoking: Smoking;
    purpose: Purpose;
    literacy: Literacy;
    habit: Habit;
    status: Status;

    //userMusics: UserMusic[]; 

    constructor(user) {
        this.id = user.id;
        this.fullname= user.fullname;
        this.email= user.email;
        this.phone= user.phone;
        this.dob = new Date(user.dob).toISOString().split('T')[0];;
        this.gender= user.gender;
        this.address= user.address;
        this.family= user.family.name;
        this.drinking= user.drinking.name;
        this.work= user.work.name;
        this.smoking= user.smoking.name;
        this.purpose= user.purpose.name;
        this.literacy= user.literacy.name;
        this.habit= user.habit.name;
        this.status= user.status.name;
        //this.userMusics = user.userMusics.music.name;
    }
}
// import { Family } from "./family.model";
// import { UserMusic } from "./user-music.model";

// export class User {
//     id: number;
//     fullname: string;
//     email: string;
//     phone: string;
//     dob: string;
//     gender: string;
//     address: string;
//     family: Family;
//     userMusics: UserMusic[];

//     constructor(user) {
//         this.id = user.id;
//         this.fullname = user.fullname;
//         this.email = user.email;
//         this.phone = user.phone;
//         this.dob = new Date(user.dob).toISOString().split('T')[0];
//         this.gender = user.gender;
//         this.address = user.address;
        
//         // Check if family exists before accessing its nested properties
//         this.family = user.family ? user.family.name : null;

//         // Check if userMusics exists before accessing its nested properties
//         this.userMusics = user.music ? user.music.name : null;
//     }

//     getMusicNames(): string {
//         // Check if userMusics is an array before proceeding
//         if (Array.isArray(this.userMusics)) {
//             // Use map to extract music names from each UserMusic object
//             const musicNames = this.userMusics.map(userMusic => userMusic.music ? userMusic.music.name : null);
            
//             // Use filter to remove null or undefined values
//             const filteredMusicNames = musicNames.filter(name => name !== null && name !== undefined);

//             // Use join to concatenate music names with commas
//             return filteredMusicNames.join(", ");
//         }
//         return "";
//     }
// }
