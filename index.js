function superbowlWin(record) {
    const resultObject = record.find(fetchArr);

    if (resultObject !== undefined) {
        return resultObject.year;
    }

    return resultObject;
}

function fetchArr(arr) {
    return arr.result === "W"
}