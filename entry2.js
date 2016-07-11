import './style.scss';

import welcome from './welcome';
import jodeng from './jodeng';

// var foo = bar; // eslint테스트를 위한 에러코드

// 외부 모듈 사용하기
import _ from 'underscore';

document.write(`${welcome}, ${jodeng}!`);
document.write(`Random: ${_.random(0, 100)}`);
