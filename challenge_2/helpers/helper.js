const parser = (data) => {
    let output = {labels:[], data:[]};
    let parsedLabels = Object.keys(data.bpi);
    let parsedDataset = Object.values(data.bpi);

    output.labels = parsedLabels;
    output.data = parsedDataset;

    return output;

}

module.exports = {
    parser
};