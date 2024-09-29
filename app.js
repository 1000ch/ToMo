const score = document.querySelector('#score');
const share = document.querySelector('#share');
const fun = document.querySelector('#fun');
const purpose = document.querySelector('#purpose');
const possibility = document.querySelector('#possibility');
const emotionalPressure = document.querySelector('#emotional-pressure');
const financialPressure = document.querySelector('#financial-pressure');
const inertia = document.querySelector('#inertia');

function applyQueryString() {
  const params = new URLSearchParams(location.search);

  if (params.has('a')) {
    fun.value = params.get('a');
  }

  if (params.has('b')) {
    purpose.value = params.get('b');
  }

  if (params.has('c')) {
    possibility.value = params.get('c');
  }

  if (params.has('d')) {
    emotionalPressure.value = params.get('d');
  }

  if (params.has('e')) {
    financialPressure.value = params.get('e');
  }

  if (params.has('f')) {
    inertia.value = params.get('f');
  }
}

function updateQueryString() {
  const params = new URLSearchParams(location.search);

  params.set('a', fun.valueAsNumber);
  params.set('b', purpose.valueAsNumber);
  params.set('c', possibility.valueAsNumber);
  params.set('d', emotionalPressure.valueAsNumber);
  params.set('e', financialPressure.valueAsNumber);
  params.set('f', inertia.valueAsNumber);

  history.replaceState(null, '', `?${params}`);
}

function calculate() {
   const a = fun.valueAsNumber * 10;
   const b = purpose.valueAsNumber * 5;
   const c = possibility.valueAsNumber * 1.67;
   const d = emotionalPressure.valueAsNumber * -1.67;
   const e = financialPressure.valueAsNumber * -5;
   const f = inertia.valueAsNumber * -10;

   return (a + b + c + d + e + f).toFixed(2);
}

fun.addEventListener('change', () => {
  updateQueryString();

  score.textContent = calculate();
});

purpose.addEventListener('change', () => {
  updateQueryString();

  score.textContent = calculate();
});

possibility.addEventListener('change', () => {
  updateQueryString();

  score.textContent = calculate();
});

emotionalPressure.addEventListener('change', () => {
  updateQueryString();

  score.textContent = calculate();
});

financialPressure.addEventListener('change', () => {
  updateQueryString();

  score.textContent = calculate();
});

inertia.addEventListener('change', () => {
  updateQueryString();

  score.textContent = calculate();
});

share.addEventListener('click', async () => {
  const data = {
    text: `私の ToMo 指数は ${score.textContent} です`,
    title: document.title,
    url: location.href,
  };

  if (!navigator.canShare(data)) {
    return;
  }

  await navigator.share(data);
});

applyQueryString();

score.textContent = calculate();
