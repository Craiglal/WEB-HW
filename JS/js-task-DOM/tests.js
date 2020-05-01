QUnit.module("select");

QUnit.test('getElementById', function (assert) {
    assert.equal($('#banner').text(), "Привіт");

});

QUnit.test('getElementsByTagName', function (assert) {
    assert.equal($('li').eq(2).text(), "Світ");

});

QUnit.test('getElementsByClassName', function (assert) {
    assert.equal($('.tests').eq(1).text(), "Ще трошки попрацюйте");

});


QUnit.module("attribute");

QUnit.test('add class to one element', function (assert) {
    assert.ok($('.tests li').eq(2).hasClass('selected'));
});

QUnit.test('add attribute title to element', function (assert) {
    assert.equal($('.tests').eq(1).attr("title"), "Вже половина завдань");
});

QUnit.module("style");

QUnit.test('add color', function (assert) {
    var prop = 'color';
    var valueProp = 'rgb(255, 0, 0)';
        
    assert.equal($('.tests').eq(1).css(prop), valueProp);
});

QUnit.test('add font-size', function (assert) {
    var prop = 'font-size';
    var valueProp = '40px';
        
    assert.equal($('.tests').eq(1).css(prop), valueProp);
});

QUnit.test('add css property to all li', function (assert) {
    var prop = 'float';
    var valueProp = 'left';

    [...$('.tests>li')].forEach((el) => {
        assert.equal(el.style[prop], valueProp);
    });
});

QUnit.module("change DOM");

QUnit.test('delete h1', function (assert) {
   // assert.equal($('h1').eq(0)[0].tagName.toLowerCase(), "h1");
    assert.equal($('h1').length, 1);
});


