const dashboard = {
  title: 'LinkedIn IC Engagement Benchmark',
  version: '0.1',
  status: 'draft-for-team-validation',
  rubricUrl: 'https://github.com/peteradl/marketing_benchmark/blob/main/benchmarks/linkedin-ic-engagement-v0.1.md',
  window: {
    start: '2026-09-03T21:06:00.000Z',
    end: '2026-09-10T21:06:00.000Z',
    timezone: 'America/New_York'
  },
  coverage: {
    level: 'Partial',
    collectionStatus: 'observed_evidence_partial',
    gradingStatus: 'model_assessed_requires_review',
    captureCount: 20,
    eligibleEvents: 0
  },
  metrics: [
    { key: 'breadth', label: 'Qualified breadth', value: null, target: 'Target: 3+' },
    { key: 'points', label: 'Weighted engagement points', value: null, target: 'Target: 6.0+' },
    { key: 'depth', label: 'Deep conversations', value: null, target: 'Target: 1+' },
    { key: 'stewardship', label: 'Stewardship rate', value: null, target: 'Target: 80%+' },
    { key: 'persistence', label: '28-day repeat rate', value: null, target: 'Target: 25%+' }
  ],
  people: [
    {
      id: 'nol',
      initials: 'NB',
      name: 'Nolan Browne',
      profile: 'linkedin.com/in/nolbro',
      breadth: null,
      points: null,
      depth: null,
      stewardship: null,
      status: 'Not publishable'
    },
    {
      id: 'colby',
      initials: 'CS',
      name: 'Colby Swanson',
      profile: 'linkedin.com/in/colbyswanson',
      breadth: null,
      points: null,
      depth: null,
      stewardship: null,
      status: 'Not publishable'
    }
  ],
  evidence: [
    {
      target: 'nol',
      profile: 'Nolan Browne',
      excerpt: 'ADMARES is an interesting example of where this thinking could lead.',
      url: 'https://www.linkedin.com/in/nolbro/recent-activity/all/',
      eventTime: 'Unresolved relative date',
      review: 'Needs review',
      result: 'Time uncertain'
    },
    {
      target: 'colby',
      profile: 'Colby Swanson',
      excerpt: 'NAVFAC is asking industry how industrialized construction can deliver new barracks 30% faster and 20% cheaper at Camp Pendleton.',
      url: 'https://www.linkedin.com/in/colbyswanson/recent-activity/all/',
      eventTime: 'Relative label: 1d',
      review: 'Needs review',
      result: 'Time uncertain'
    }
  ]
};

const rubric = {
  relevance: {
    title: 'Relevance qualifies the participant',
    copy: 'A participant is Qualified only when at least two of three evidence-backed signals are present. Missing evidence remains null.',
    items: [
      ['Signal 1', 'Relevant organization or role', 'Works in or materially supports an IC deployment system.'],
      ['Signal 2', 'IC experience', 'Public evidence shows direct Industrialized Construction experience.'],
      ['Signal 3', 'Authority', 'Can shape, fund, approve, procure, regulate, publish, or convene.'],
      ['Threshold', 'Two of three', 'Only Qualified participants enter benchmark totals.']
    ]
  },
  influence: {
    title: 'Influence weights a qualified conversation',
    copy: 'Use the lowest tier supported by current public evidence. Job-title seniority alone is not enough.',
    items: [
      ['1.00x', 'Relevant practitioner', 'Credible field participation without broader authority evidence.'],
      ['1.25x', 'Field shaper', 'Demonstrated technical, founder, research, media, or convening influence.'],
      ['1.50x', 'Ecosystem decision-maker', 'Directs capital, procurement, policy, standards, or deployment.'],
      ['null', 'Unverified', 'Included in breadth, excluded from weighted points.']
    ]
  },
  depth: {
    title: 'Depth measures what the conversation did',
    copy: 'Score the highest observable level reached in one participant-conversation. Length alone never raises depth.',
    items: [
      ['1', 'Signal', 'Brief but on-topic acknowledgement or answer.'],
      ['2', 'Substance', 'Question, example, fact, experience, or useful counterpoint.'],
      ['3', 'Dialogue', 'Substantive two-way exchange or meaningful follow-up.'],
      ['4', 'Activation', 'Specific next step, resource, introduction, meeting, or collaboration.']
    ]
  },
  coverage: {
    title: 'Coverage controls whether results can be published',
    copy: 'Coverage is confidence, not performance. It never adds points and cannot be replaced by a system completeness flag.',
    items: [
      ['Unknown', 'No result', 'Collector status or target coverage was not established.'],
      ['Partial', 'Evidence only', 'Material gaps or unresolved dates block numeric results.'],
      ['Substantial', 'Known subtotal', 'Publish with a qualifier; do not claim completeness.'],
      ['Verified', 'Full scorecard', 'All target surfaces, conversations, and event times are verified.']
    ]
  },
  persistence: {
    title: 'Persistence shows relationship continuity',
    copy: 'Use a rolling 28-day window. Repetition in one thread is not persistence, and the rate waits for four qualifying weeks.',
    items: [
      ['2+', 'Distinct conversations', 'The participant appears in more than one conversation.'],
      ['2+', 'Distinct days', 'The relationship is visible beyond one burst of activity.'],
      ['28d', 'Rolling window', 'The denominator is all unique Qualified participants.'],
      ['25%+', 'Pilot target', 'Repeat Qualified participants divided by unique Qualified participants.']
    ]
  }
};

let selectedTarget = 'both';

function valueLabel(value) {
  return value === null ? '--' : String(value);
}

function renderMetrics() {
  document.querySelector('#metricGrid').innerHTML = dashboard.metrics.map(function (metric) {
    return [
      '<article class="metric">',
      '<div class="metric-label">' + metric.label + '</div>',
      '<div class="metric-value">' + valueLabel(metric.value) + '</div>',
      '<div class="metric-target">' + metric.target + '</div>',
      '<div class="metric-track" aria-hidden="true"><span></span></div>',
      '</article>'
    ].join('');
  }).join('');
}

function renderPeople() {
  const visible = dashboard.people.filter(function (person) {
    return selectedTarget === 'both' || person.id === selectedTarget;
  });
  document.querySelector('#peopleList').innerHTML = visible.map(function (person, index) {
    return [
      '<article class="person-row" style="animation-delay:' + index * 55 + 'ms">',
      '<div class="person-identity"><div class="person-avatar" aria-hidden="true">' + person.initials + '</div>',
      '<div><strong>' + person.name + '</strong><span>' + person.profile + '</span></div></div>',
      '<div class="person-metric"><span>Qualified breadth</span><strong>' + valueLabel(person.breadth) + '</strong></div>',
      '<div class="person-metric"><span>Weighted points</span><strong>' + valueLabel(person.points) + '</strong></div>',
      '<div class="person-metric"><span>Deep conversations</span><strong>' + valueLabel(person.depth) + '</strong></div>',
      '<div class="person-metric"><span>Stewardship</span><strong>' + valueLabel(person.stewardship) + '</strong></div>',
      '<div><span class="status-chip status-chip--warning">' + person.status + '</span></div>',
      '</article>'
    ].join('');
  }).join('');
}

function renderEvidence() {
  const search = document.querySelector('#evidenceSearch').value.trim().toLowerCase();
  const rows = dashboard.evidence.filter(function (item) {
    const targetMatch = selectedTarget === 'both' || item.target === selectedTarget;
    const searchMatch = [item.profile, item.excerpt, item.eventTime, item.review, item.result]
      .join(' ')
      .toLowerCase()
      .includes(search);
    return targetMatch && searchMatch;
  });
  document.querySelector('#evidenceRows').innerHTML = rows.map(function (item) {
    return [
      '<tr>',
      '<td><strong>' + item.profile + '</strong></td>',
      '<td><a class="evidence-link" href="' + item.url + '" target="_blank" rel="noreferrer">' + item.excerpt + '</a></td>',
      '<td>' + item.eventTime + '</td>',
      '<td><span class="status-chip status-chip--muted">' + item.review + '</span></td>',
      '<td><span class="status-chip status-chip--warning">' + item.result + '</span></td>',
      '</tr>'
    ].join('');
  }).join('');
  document.querySelector('#emptyState').hidden = rows.length !== 0;
}

function renderRubric(key) {
  const item = rubric[key];
  const scale = item.items.map(function (entry) {
    return [
      '<div class="scale-item">',
      '<span>' + entry[0] + '</span>',
      '<strong>' + entry[1] + '</strong>',
      '<p>' + entry[2] + '</p>',
      '</div>'
    ].join('');
  }).join('');
  document.querySelector('#rubricPanel').innerHTML =
    '<h3>' + item.title + '</h3><p>' + item.copy + '</p><div class="rubric-scale">' + scale + '</div>';
}

function setTarget(target) {
  selectedTarget = target;
  document.querySelectorAll('.segment').forEach(function (button) {
    button.classList.toggle('is-selected', button.dataset.target === target);
  });
  renderPeople();
  renderEvidence();
}

document.querySelectorAll('.segment').forEach(function (button) {
  button.addEventListener('click', function () { setTarget(button.dataset.target); });
});

document.querySelectorAll('.rubric-tab').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('.rubric-tab').forEach(function (tab) {
      const selected = tab === button;
      tab.classList.toggle('is-selected', selected);
      tab.setAttribute('aria-selected', String(selected));
    });
    renderRubric(button.dataset.rubric);
  });
});

document.querySelector('#evidenceSearch').addEventListener('input', renderEvidence);
document.querySelector('#periodSelect').addEventListener('change', function (event) {
  const metric = dashboard.metrics.find(function (item) { return item.key === 'persistence'; });
  metric.target = event.target.value === '28' ? 'Target: 25%+' : 'Requires 28 days';
  renderMetrics();
});

document.querySelector('#exportButton').addEventListener('click', function () {
  const payload = Object.assign({}, dashboard, {
    exportedAt: new Date().toISOString(),
    selectedTarget: selectedTarget
  });
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'adl-linkedin-benchmark-snapshot.json';
  link.click();
  URL.revokeObjectURL(url);
});

const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.addEventListener('click', function () {
  const open = document.body.classList.toggle('nav-open');
  mobileMenu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(function (item) { item.classList.remove('is-active'); });
    link.classList.add('is-active');
    document.body.classList.remove('nav-open');
    mobileMenu.setAttribute('aria-expanded', 'false');
  });
});

renderMetrics();
renderPeople();
renderEvidence();
renderRubric('relevance');
