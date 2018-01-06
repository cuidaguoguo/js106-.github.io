'use strict';

function double_to_one(collection) {

return (collection + '').split(',').map(x => Number(x));
}

module.exports = double_to_one;
