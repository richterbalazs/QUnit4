QUnit.module('Másodfokú egyenlet', function() {
    QUnit.test('Létezik?', function(assert) {
      assert.ok(masodfoku);
    });

    QUnit.test('Függvény_e?', assert => {
        assert.ok(typeof(masodfoku) === "function");
      });
    // alap működés
    QUnit.test('Végtelen', assert => {
        assert.equal(masodfoku(0, 0, 0), "Végtelen megoldás van.");
      });

    QUnit.test('a =0, b = 0, c != 0', assert => {
        assert.equal(masodfoku(0, 0, 30), "Nincs megoldás.");
      });

    QUnit.test('D negatív', assert => {
        assert.equal(masodfoku(10, 3, 30), "Nincs megoldás.");
      });

    QUnit.test('D = 0', assert => {
        assert.equal(masodfoku(1, 4, 4), -2);
      });

    QUnit.test('-c / b esete', assert => {
        assert.equal(masodfoku(0, 4, 4), -1);
      });

    QUnit.test('alap eset, 2 megoldás', assert => {
        assert.equal(masodfoku(1, 5, 4), "x1 = -1, x2 = -4");
      });

    //sorozat tesztelése
    QUnit.test('sorozat tesztelése, Nincs megoldás', assert => {
        let lista = [[0, 0, 3], [4, 2, 14]];
        lista.forEach(elem =>{
            assert.equal(masodfoku(elem[0], elem[1], elem[2]), "Nincs megoldás.");
        })
        
    });

    //spec esetek

      QUnit.test('Nincs paraméter', assert => {
        assert.equal(masodfoku(), "Nincs elég paraméter.");
      });

      QUnit.test('Egy paraméter', assert => {
        assert.equal(masodfoku(1), "Nincs elég paraméter.");
      });

      QUnit.test('Négy paraméter', assert => {
        assert.equal(masodfoku(1, 1, 1, 1), "Háromnál több paraméter");
      });

      QUnit.test('Szöveg, de szám ', assert => {
        assert.equal(masodfoku("0",0, 0), "Végtelen megoldás van.");
      }); 

      QUnit.test('Nem szám', assert => {
        assert.equal(masodfoku("kutya", 2, 3), "Nem szám valamelyik paraméter.");
      }); 

      QUnit.test('Túlcsordulás', assert => {
        assert.equal(masodfoku(3.56e+444, 2, 3), "Túlcsordulás");
      }); 

      

  });