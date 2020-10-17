import json from "@/content/horses.json"

export default function getHorses(){
    let horses = json;
    return horses.horses;
}