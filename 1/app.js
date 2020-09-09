/* 
The goal is to create something tha reminds of an excel spreadsheet,
but with predetermined formulas. The user will only be able to change
the values in the inputs. The rest is simply outputs depending on
those inputs.
For example should row 4 be the products of row 2/ row 3, and row 8
should be the input value -1.
*/
//////////////////////////////////////////////////////////////
/*
Current Problems:
1) Row 7 adds a 5th column. There should not be a sum at the end of
that row.

2) Output for the rows works fine, but for the columns I only get
the correct answer in the console.log, not in the innerHTML.
*/
const forms = document.querySelectorAll("form");

forms.forEach((tableElement) => {
  tableElement.onchange = editSheet;
});

function editSheet() {
  const allrows = document.querySelectorAll("tr");

  const DEFAULT_ONE = 1;

  allrows.forEach((i, ix) => {
    rowTotal = 0;
    colTotal = 0;
    row8 = 0;
    for (i = 0; i < allrows[ix].getElementsByTagName("input").length; i++) {
      /* Row Total */
      rowTotal =
        rowTotal + Number(allrows[ix].getElementsByTagName("input")[i].value);

      /* Column Total */
      colTotal =
        Number(allrows[2].getElementsByTagName("input")[i].value) /
          Number(allrows[3].getElementsByTagName("input")[i].value) ||
        DEFAULT_ONE;
      console.log(colTotal.toFixed(2));

      /* Row 8 */
      row8 = Number(allrows[7].getElementsByTagName("input")[i].value) - 1;
      console.log(row8);

      allrows[ix].querySelector(".sum").innerHTML = rowTotal;
      allrows[4].querySelector(".col").innerHTML = colTotal.toFixed(2);
      allrows[8].querySelector(".row8").innerHTML = row8;
    }
  });
}
