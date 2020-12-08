const chartData = [
    { year: 2016, income: 20000, color: "red" },
    { year: 2017, income: 25000, color: "brown" },
    { year: 2018, income: 18000, color: "blue" },
    { year: 2019, income: 22000, color: "chocolate" },
    { year: 2020, income: 11000, color: "darkcyan" }
]

function canvasChartLine() {
    const canvasChart = document.getElementById("canvasChartLine");

    const ctx = canvasChart.getContext("2d");

    canvasChart.width = ((chartData.length + 1) * 100).toString();

    const CHART_MARGIN = 50;

    const CHART_START_X = CHART_MARGIN;
    const CHART_START_Y = canvasChart.height - CHART_MARGIN;

    //Подготовим декартову плоскость
    ctx.beginPath();
    ctx.moveTo(CHART_START_X, CHART_START_Y);
    ctx.lineTo(CHART_MARGIN, CHART_MARGIN);
    ctx.moveTo(CHART_START_X, CHART_START_Y);
    ctx.lineTo(canvasChart.width - CHART_MARGIN, CHART_START_Y);

    ctx.stroke();

    ctx.moveTo(CHART_START_X, CHART_START_Y);

    //Отобразим данные из массива объектов 
    const chartInterval = 120;
    const chartScale = 100; // Масшатб одна сотая
    var x = 0, y = 0, y_2 = CHART_START_Y + 20;
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";

    for (let i = 0; i < chartData.length; i++) {
        x = CHART_START_X + i * chartInterval;
        y = CHART_START_Y - chartData[i].income / chartScale;

        ctx.lineTo(x, y);
        x -= 20;

        if (i > 0) {
            if (chartData[i - 1].income <= chartData[i].income) {
                y -= 20;
                ctx.fillText(chartData[i].income, x, y);
                y += 20;
            }
            else {
                y += 20;
                ctx.fillText(chartData[i].income, x, y);
                y -= 20;
            }
        }

        ctx.fillText(chartData[i].year, x, y_2);
        x += 20;
    }

    ctx.stroke();
}

function canvasChartColumn() {
    const canvasChart = document.getElementById("canvasChartColumn");

    const ctx = canvasChart.getContext("2d");

    canvasChart.width = ((chartData.length + 1) * 100 + 50).toString();

    const CHART_MARGIN = 50;

    const CHART_START_X = CHART_MARGIN;
    const CHART_START_Y = canvasChart.height - CHART_MARGIN;

    //Подготовим декартову плоскость
    ctx.beginPath();
    ctx.moveTo(CHART_START_X, CHART_START_Y);
    ctx.lineTo(CHART_MARGIN, CHART_MARGIN);
    ctx.moveTo(CHART_START_X, CHART_START_Y);
    ctx.lineTo(canvasChart.width - CHART_MARGIN, CHART_START_Y);

    ctx.stroke();

    ctx.moveTo(CHART_START_X + 30, CHART_START_Y);

    //Отобразим данные из массива объектов 
    const chartInterval = 120;
    const chartScale = 100; // Масшатб одна сотая
    var x = 0, y = 0, y_2 = CHART_START_Y + 20;
    ctx.font = "16px Arial";

    for (let i = 0; i < chartData.length; i++) {
        x = CHART_START_X + 30 + i * chartInterval;
        y = CHART_START_Y - chartData[i].income / chartScale;

        ctx.fillStyle = chartData[i].color;
        ctx.fillRect(x, y, 20, chartData[i].income / chartScale);
        ctx.moveTo(x, y);

        x -= 10;
        y -= 20;

        ctx.fillStyle = "red";
        ctx.fillText(chartData[i].income, x, y);
        ctx.fillText(chartData[i].year, x, y_2);

        y += 20;
        x += 10;
    }

    ctx.stroke();
}


canvasChartLine();

canvasChartColumn();
