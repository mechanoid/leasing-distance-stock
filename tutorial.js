var data = {
  yearLimit: 25000,
  consumptions: {
    2015: {
      3: 2200
      , 4: 4095
      , 5: 6495
      , 6: 8195
      , 7: 11000
      , 8: 13000
      , 9: 16005
    }
  }
};

var StockTable = React.createClass({
  render: function() {
    var data = this.props.data;
    var consumptions = data.consumptions;
    var monthlyLimit = Math.ceil(data.yearLimit / 12);
    var consumptionRows = [];

    Object.keys(consumptions).forEach(function(year){
      var consumptionsByYear = consumptions[year];

      consumptionRows.push.apply(consumptionRows, Object.keys(consumptionsByYear).map(function(month, i){
        var consumptionInMonth = consumptionsByYear[month];

        return (
          <tr>
            <td>{year}/{month} - {year}/{parseInt(month) + 1}</td>
            <td>{consumptionInMonth}</td>
            <td>{monthlyLimit}</td>
            <td>{(monthlyLimit * (i+1)) - consumptionInMonth}</td>
          </tr>
        )
      }));
    });

    return (
      <table className="stock-table">
        <tr>
          <th className="date-col">date-range</th>
          <th>monthly consumption</th>
          <th>monthly limit</th>
          <th>balance</th>
        </tr>
        {consumptionRows}
      </table>
    )
  }
});

// var CommentList = React.createClass({
//   render: function() {
//     return (
//       <div className="commentList">
//         Hello, world! I am a CommentList.
//       </div>
//     );
//   }
// });
//
// var CommentForm = React.createClass({
//   render: function() {
//     return (
//       <div className="commentForm">
//         Hello, world! I am a CommentForm.
//       </div>
//     );
//   }
// });
//
// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         <h1>Comments</h1>
//         <CommentList />
//         <CommentForm />
//       </div>
//     );
//   }
// });

React.render(
  React.createElement(StockTable, {data: data}),
  document.getElementById('content')
);
