//Check if input is a number or not.
let app = new Vue({
  el: "#app",
  data() {
    return {
      columns: '',
      rows: '',
      tableString: '',
      header: false
    }
  },
  methods: {
    preHTML() {
      this.tableString = "";
      this.tableString += "<table class='table is-bordered is-fullwidth'><tbody>";
      if (this.header) {
        this.tableString += "<thead>";
          this.genCols(true)
          this.tableString += "</thead>";
        }
      this.genRows();
      this.tableString += "</tbody></table>";
    },
    genRows() {
      for (let i = 0; i < this.rows; i++) {
        this.tableString += "<tr>";
        this.genCols();
        this.tableString += "</tr>";
      }
    },
    genCols(header) {
      for (let i = 0; i < this.columns; i++) {
        if(header) {
          this.tableString += "<th>";
          this.tableString += "Header Title";
          this.tableString += "</th>";
        } else {
          this.tableString += "<td>";
          this.tableString += "<input class='input' type='text' />";
          this.tableString += "</td>";
        }
      }
    },
    changeValue() {
      this.preHTML()
    },
    openInNewTab() {
      let newWindow = window.open("about:blank");
      let string = '<pre>' + this.tableString.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
      newWindow.document.write(string)
      newWindow.document.close()
    }
  }
})