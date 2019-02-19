window.addEventListener( 'load' , function() {
  Vue.prototype.axios = axios;
  let app = new Vue( {
    el: '#app',
    data: {
      countries: {},
      input: {
        gr: null,
        pl: null,
        be: null,
      },
      editId: null
    },
    created: function() {
      this.axios.get( '/api/countries' )
        .then( (_response) => {
          this.countries = _response.data.data;
        } );
    },
    methods: {
      remove: function( _id ) {
        this.axios.delete( `/api/countries/${_id}` )
          .then( () => {
            Vue.delete( this.countries , _id );
          } );
      },
      edit: function( _id ) {
      let io = Object.assign( {} , this.countries[_id] );
      this.input = io;
      this.editId = _id;
    },
      commit: function() {
        if ( this.editId === null ) {
          // add
          let oo = Object.assign( {} , this.input );
          axios.post( '/api/countries' , oo )
            .then( _response => {
              if ( _response.data.ret === "OK" ) {
                Vue.set( this.countries , _response.data.id , oo );
              }
            } );
       }
         else {
          // edit
          for ( let k in this.input ) {
            this.countries[this.editId][k] = this.input[k];
          }
          axios.put( `/api/countries/${this.editId}` , this.countries[this.editId] );
          this.editId = null;
          this.input = {
            gr: null,
            be: null,
            pl: null
          }
        }
      }
    }
  })
  });

  function myFunction(x) {
    if (x.matches) {
      document.getElementById("mg").style.position="static";
    } else {
      document.getElementById("mg").style.position="sticky";
    }
  }
  var x = window.matchMedia("(max-width: 700px)");
  window.addEventListener( 'load' , function() {
  myFunction(x);
  x.addListener(myFunction);
  });
