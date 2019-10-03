//Check if input is a number or not.
let app = new Vue({
  el: "#app",
  data() {
    return {
      columns: '',
      rows: '',
      tableString: '',
      header: false,
      tableSourceCode: '',
      showTableSourceCode: false,
      copyStatus: false,
      copyStatusText: '',
      copyStatusClass: ''
    }
  },
  methods: {
    preHTML() {
      this.tableString = "";
      this.tableString += "<table class='table is-bordered is-fullwidth'>";
      if (this.header) {
        this.tableString += "<thead>";
          this.genCols(true)
          this.tableString += "</thead>";
        }
      this.tableString += "<tbody>";
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
    openModal() {
      // Opens the modal and set flag
      this.showTableSourceCode = true;
      let string = '<code>' + this.tableString.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code>';
      this.tableSourceCode = string;
    },
    closeModal() {
      // Closes the modal and reset flags as well as status content
      this.showTableSourceCode = false;
      this.copyStatus = false;
      this.copyStatusClass = '';
      this.copyStatusText = '';
    },
    copyCode() {
      // Copies the content of 'generatedSourceCode' <div> to user's clipboard
      let generatedSourceCodeStr = document.querySelector('#generatedSourceCode');
      let range = document.createRange();
      range.selectNode(generatedSourceCodeStr);
      window.getSelection().addRange(range);

      try {
        // Execute copy command and set status content
        this.copyStatus = document.execCommand('copy');
        this.copyStatusClass = this.copyStatus ? 'has-background-success' : 'has-background-danger';
        this.copyStatusText = 'Copied!'
      } catch(err) {
        // Copy didn't work, reset status content
        this.copyStatus = false;
        this.copyStatusClass = '';
        this.copyStatusText = 'Something went wrong!'
      }
      window.getSelection().removeAllRanges();
    }
  }
})