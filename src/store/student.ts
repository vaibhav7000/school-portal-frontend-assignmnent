import {atom} from "jotai";
import type { SchoolLeaderboardProps } from "../Components/SchoolLeaderboard";


const students = atom<SchoolLeaderboardProps[]>(getData());

export default students;


function getData() {
    const firstname: string = "SwiftJavaa";
    const lastname: string = "Javascript";
    const result: SchoolLeaderboardProps[] = [];


    for (let i = 0; i < 10; i++) {
            const startIndex = Math.floor(Math.random() * 9);
            const standard = Math.floor(Math.random() * 13) + 1;
            const points = Math.floor(Math.random() * 999) + 1;
            const accuracy = Math.floor(Math.random() * 101);
            const stars = Math.floor(Math.random() * 101);
            const streak = Math.floor(Math.random() * new Date().getMonth() + 1);

            result.push({
                image: "",
                firstname: firstname.slice(startIndex),
                lastname: lastname.slice(startIndex),
                points,
                standard,
                accuracy,
                stars,
                streak,
                index: i
            })
        }

        return result;

}