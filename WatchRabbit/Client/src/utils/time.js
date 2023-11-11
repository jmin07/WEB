export default function timeFunc(time) {
    const getTime = new Date(time);
    const year = getTime.getFullYear();
    const month = "0" + (getTime.getMonth() + 1);
    const day = "0" + getTime.getDate();

    const hours = "0" + getTime.getHours();
    console.log("시간", "0" + getTime.getHours());
    const minutes = "0" + getTime.getMinutes();

    const timeString =
        year + "/" + month + "/" + day + " " + hours + ":" + minutes;
    return timeString;
}
