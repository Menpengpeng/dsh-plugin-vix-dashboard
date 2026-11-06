window.__ModuleLoader__.load({
  id: '@local/vix-dashboard',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const { useEffect, useMemo, useState } = React;
    const css = `
      .vixd-page{height:100%;overflow:auto;padding:0 24px 32px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);box-sizing:border-box;container-type:inline-size}
      .vixd-head{position:sticky;top:0;z-index:3;display:flex;justify-content:space-between;align-items:center;min-height:54px;margin:0 -24px 16px;padding:0 24px;background:var(--dsw-alias-bg-base);border-bottom:1px solid var(--dsw-alias-border-l1)}.vixd-head h1{margin:0;font-size:17px;font-weight:650}.vixd-muted{color:var(--dsw-alias-label-secondary);font-size:12px}
      .vixd-actions{display:flex;gap:8px}.vixd-btn{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:7px;padding:7px 11px;cursor:pointer}.vixd-btn:hover{background:var(--dsw-alias-interactive-bg-hover)}.vixd-btn.primary{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground);border:0}
      .vixd-summary{margin:0}.vixd-summary-card{min-height:86px;padding:14px 16px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-1)}.vixd-overview{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:18px}.vixd-summary-label{font-size:11px;color:var(--dsw-alias-label-caption)}.vixd-score{font-size:32px;font-weight:750;line-height:1.1;font-variant-numeric:tabular-nums;margin:7px 0 3px}.vixd-score small{font-size:15px;color:var(--dsw-alias-label-secondary);font-weight:500}.vixd-risk{font-size:13px;color:var(--dsw-alias-label-secondary)}.vixd-overview-signals{min-width:0}.vixd-overview-price{min-width:126px}.vixd-signal-row{display:flex;justify-content:space-between;align-items:end;gap:8px;padding-top:8px}.vixd-signal{display:grid;justify-items:center;gap:5px;min-width:38px;font-size:10px;color:var(--dsw-alias-label-caption)}.vixd-dot{width:10px;height:10px;border-radius:50%;background:var(--dsw-alias-state-error-primary)}.vixd-dot.green{background:var(--dsw-alias-state-success-primary)}.vixd-dot.yellow{background:var(--dsw-alias-state-warn-primary)}.vixd-dot.error{background:transparent;border:2px solid var(--dsw-alias-border-l3);box-sizing:border-box}.vixd-price{font-size:22px;font-weight:650;font-variant-numeric:tabular-nums;margin-top:11px}
      .vixd-advice{margin-top:14px;padding:14px 16px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}.vixd-advice-label{font-size:11px;color:var(--dsw-alias-label-caption)}.vixd-advice h2{font-size:15px;margin:5px 0 6px}.vixd-advice p{margin:0;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.55}.vixd-advice-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:11px}.vixd-advice-list{margin:5px 0 0;padding-left:17px;color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.5}.vixd-advice-next{margin-top:10px;padding-top:9px;border-top:1px solid var(--dsw-alias-border-l1)}.vixd-advice-notice{margin-top:8px!important;font-size:11px!important;color:var(--dsw-alias-label-caption)!important}.vixd-sources{margin-top:14px;padding:12px 14px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}.vixd-sources-head{display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin-top:4px}.vixd-sources-head b{font-size:14px}.vixd-source-list{display:grid;gap:5px;margin-top:9px}.vixd-source-row{display:grid;grid-template-columns:8px minmax(0,1fr) auto;align-items:center;gap:7px;font-size:11px;color:var(--dsw-alias-label-secondary)}.vixd-source-status{width:7px;height:7px;border-radius:50%;background:var(--dsw-alias-state-success-primary)}.vixd-source-row.error .vixd-source-status{background:var(--dsw-alias-state-error-primary)}.vixd-source-row.error{align-items:start}.vixd-source-message{grid-column:2/-1;color:var(--dsw-alias-state-error-primary);line-height:1.4;word-break:break-word}.vixd-source-time{color:var(--dsw-alias-label-caption);white-space:nowrap}.vixd-section{margin-top:18px}.vixd-section h2{font-size:15px;margin:0 0 9px}.vixd-group-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px}.vixd-group-meta{font-size:11px;color:var(--dsw-alias-label-caption);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vixd-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.vixd-card{position:relative;overflow:hidden;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);border-radius:10px;padding:12px 14px 11px 16px}.vixd-card::before{content:"";position:absolute;inset:0 auto 0 0;width:3px;background:var(--vixd-signal,var(--dsw-alias-border-l3))}.vixd-card.green{--vixd-signal:var(--dsw-alias-state-success-primary)}.vixd-card.yellow{--vixd-signal:var(--dsw-alias-state-warn-primary)}.vixd-card.red{--vixd-signal:var(--dsw-alias-state-error-primary)}.vixd-card.error{--vixd-signal:var(--dsw-alias-border-l3);opacity:.68}.vixd-card-title{font-size:13px;font-weight:620;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vixd-card-title::before{content:"";display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px;background:var(--vixd-signal);vertical-align:1px}.vixd-value{font-size:24px;font-weight:700;line-height:1.2;margin:9px 0 5px;font-variant-numeric:tabular-nums}.vixd-card p{font-size:12px;line-height:1.45;color:var(--dsw-alias-label-secondary);margin:0 0 7px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.vixd-card-meta{font-size:11px;color:var(--dsw-alias-label-caption);line-height:1.45}.vixd-trend-tip{display:none;margin:10px 0 0;padding:9px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-layer-2);font-size:11px;color:var(--dsw-alias-label-secondary)}.vixd-card:hover .vixd-trend-tip,.vixd-card:focus .vixd-trend-tip,.vixd-card:focus-within .vixd-trend-tip{display:block}.vixd-trend-title{color:var(--dsw-alias-label-primary);font-weight:620;margin-bottom:6px}.vixd-trend-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 10px}.vixd-trend-grid b{color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums}.vixd-trend-chart{margin:8px 0 7px}.vixd-trend-chart svg{display:block;width:100%;height:42px;overflow:visible}.vixd-trend-line{fill:none;stroke:var(--vixd-signal);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.vixd-trend-cross{stroke:var(--dsw-alias-border-l3);stroke-width:1;stroke-dasharray:2 2}.vixd-trend-point{fill:var(--vixd-signal);stroke:var(--dsw-alias-bg-layer-2);stroke-width:1.5}.vixd-trend-chart svg{cursor:crosshair}.vixd-trend-chart-labels{display:flex;justify-content:space-between;color:var(--dsw-alias-label-caption);font-size:10px;margin-top:2px}.vixd-card-more{margin-top:7px;border-top:1px solid var(--dsw-alias-border-l1);padding-top:5px;font-size:11px;color:var(--dsw-alias-label-caption)}.vixd-card-more summary{cursor:pointer}.vixd-card-more p{display:block;margin:5px 0 0;font-size:11px}.vixd-error{color:var(--dsw-alias-state-error-primary);margin:10px 0;font-size:12px}.vixd-error-details{padding:9px 12px;border:1px solid var(--dsw-alias-state-warn-primary);border-radius:8px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);font-size:12px}.vixd-error-details summary{cursor:pointer;color:var(--dsw-alias-state-warn-label)}.vixd-error-details p{margin:6px 0 0;white-space:pre-wrap}
      .vixd-workspace{display:grid;grid-template-columns:minmax(0,1fr) minmax(340px,.72fr);align-items:start;gap:18px;margin-top:18px}.vixd-market,.vixd-journal{min-width:0}.vixd-workspace .vixd-section:first-child{margin-top:0}.vixd-journal{position:sticky;top:70px;max-height:calc(100vh - 92px);overflow:auto;padding-right:2px}.vixd-journal-title{font-size:15px;margin:0 0 9px}.vixd-composer{margin-top:0;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}.vixd-composer>summary{cursor:pointer;padding:13px 15px;font-weight:620;list-style:none}.vixd-composer>summary::-webkit-details-marker{display:none}.vixd-composer>summary::before{content:"＋";margin-right:7px;color:var(--dsw-alias-brand-primary)}.vixd-composer-body{padding:0 15px 15px}.vixd-form{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px}.vixd-form label{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--dsw-alias-label-secondary)}.vixd-form input,.vixd-form textarea,.vixd-form select{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:7px;padding:8px}.vixd-form textarea{min-height:52px;max-height:120px;resize:vertical}.vixd-full{grid-column:1/-1}.vixd-form .vixd-full{grid-column:1/-1}
      .vixd-actions-list{display:grid;gap:5px}.vixd-act{border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1)}.vixd-act summary{list-style:none;cursor:pointer}.vixd-act summary::-webkit-details-marker{display:none}.vixd-act-row{display:grid;grid-template-columns:auto 1fr auto minmax(120px,1.2fr) auto auto;align-items:center;gap:9px;padding:10px 12px;font-size:12px}.vixd-act-row:hover{background:var(--dsw-alias-interactive-bg-hover)}.vixd-act-tag{font-weight:650}.vixd-act-tag.add{color:var(--dsw-alias-state-success-primary)}.vixd-act-tag.reduce{color:var(--dsw-alias-state-warn-primary)}.vixd-act-score{font-variant-numeric:tabular-nums;font-weight:650}.vixd-act-risk{color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vixd-act-time{color:var(--dsw-alias-label-caption);white-space:nowrap}.vixd-act-detail{border-top:1px solid var(--dsw-alias-border-l1);padding:10px 12px;color:var(--dsw-alias-label-secondary);font-size:12px}.vixd-act-detail p{margin:4px 0}.vixd-chips{display:flex;flex-wrap:wrap;gap:5px 7px;margin:8px 0}.vixd-chip{padding:3px 7px;border-radius:5px;background:var(--dsw-alias-bg-layer-2);font-size:11px}.vixd-chip::first-letter{color:var(--dsw-alias-brand-primary)}.vixd-act-delete{float:right;color:var(--dsw-alias-label-caption);background:transparent;border:0;cursor:pointer}.vixd-act-delete:hover{color:var(--dsw-alias-state-error-primary)}
      @container (max-width:980px){.vixd-page{padding:0 18px 28px}.vixd-head{margin-left:-18px;margin-right:-18px;padding-left:18px;padding-right:18px}.vixd-workspace{grid-template-columns:1fr}.vixd-journal{position:static;max-height:none;overflow:visible;padding-right:0}.vixd-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.vixd-form{grid-template-columns:repeat(2,minmax(0,1fr)}}
      @container (max-width:620px){.vixd-page{padding:0 14px 24px}.vixd-head{margin-left:-14px;margin-right:-14px;padding-left:14px;padding-right:14px}.vixd-head h1{font-size:16px}.vixd-head .vixd-muted{display:none}.vixd-overview{grid-template-columns:1fr;gap:10px}.vixd-overview-price{min-width:0}.vixd-signal-row{justify-content:flex-start;flex-wrap:wrap}.vixd-advice-grid{grid-template-columns:1fr}.vixd-grid{grid-template-columns:1fr}.vixd-form{grid-template-columns:1fr}.vixd-form .vixd-full{grid-column:auto}.vixd-act-row{grid-template-columns:auto 1fr auto auto}.vixd-act-risk{display:none}}
      @media(max-width:700px){.vixd-page{padding-left:14px;padding-right:14px}.vixd-form{grid-template-columns:1fr}}

    `;
    function Styles() { return h('style', null, css); }
    async function api(method, body) { const response = await fetch('/api/vix-dashboard', { method, headers: body ? { 'content-type': 'application/json' } : undefined, body: body ? JSON.stringify(body) : undefined }); const data = await response.json(); if (!response.ok) throw new Error(data.error || '请求失败'); return data; }
    function Icon({ active }) { return h('div', { style: { width: 24, height: 24, borderRadius: 7, background: active ? 'var(--dsw-alias-brand-primary)' : 'var(--dsw-alias-bg-layer-2)', display: 'grid', placeItems: 'center', color: active ? 'var(--dsw-alias-label-primary-foreground)' : 'var(--dsw-alias-label-secondary)', fontSize: 14, fontWeight: 700 } }, 'V'); }
    function signalShort(name) {
      const map = { 'VIX 恐慌指数': 'VIX', 'CNN 恐惧贪婪指数': 'CNN', '标普500 日线 RSI': '标普RSI', '纳指 日线 RSI': '纳指RSI', '标普500 距200日均线偏离': '标普MA', '纳斯达克100 距200日均线偏离': '纳指100MA' };
      return map[name] || name;
    }
    function numericValue(value) { const matched = String(value || '').match(/[-+]?\d+(?:\.\d+)?/); return matched ? Number(matched[0]) : null; }
    function trendStats(item, history) {
      const marketPoints = (item.trend || []).filter(point => Number.isFinite(point?.value) && point?.at).slice(-7);
      const snapshotPoints = (history || []).map(snapshot => {
        const saved = snapshot?.indicators?.find(indicator => indicator.name === item.name), value = numericValue(saved?.value);
        return Number.isFinite(value) && snapshot?.updatedAt ? { value, at: snapshot.updatedAt } : null;
      }).filter(Boolean).sort((a, b) => a.at.localeCompare(b.at)).slice(-7);
      const points = marketPoints.length ? marketPoints : snapshotPoints;
      if (!points.length) return { count: 0, points, source: '快照' };
      const values = points.map(point => point.value), latest = values.at(-1), previous = values.at(-2);
      return { count: points.length, points, source: marketPoints.length ? '最近交易日' : '保存快照', latest, delta: previous == null ? null : latest - previous, min: Math.min(...values), max: Math.max(...values), avg: values.reduce((sum, value) => sum + value, 0) / values.length };
    }
    function TrendChart({ points }) {
      const [hoverIndex, setHoverIndex] = useState(null);
      if (points.length < 2) return null;
      const values = points.map(point => point.value), min = Math.min(...values), max = Math.max(...values), span = max - min || 1;
      const x = index => index / (points.length - 1) * 136 + 2, y = value => 34 - (value - min) / span * 28;
      const coordinates = points.map((point, index) => `${x(index).toFixed(1)},${y(point.value).toFixed(1)}`).join(' ');
      const date = at => new Date(at).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' });
      const format = value => value.toLocaleString(undefined, { maximumFractionDigits: 2 });
      const selectPoint = event => { const box = event.currentTarget.getBoundingClientRect(), ratio = Math.max(0, Math.min(1, (event.clientX - box.left) / box.width)); setHoverIndex(Math.round(ratio * (points.length - 1))); };
      const selected = hoverIndex == null ? null : points[hoverIndex];
      return h('div', { className: 'vixd-trend-chart', title: '在图上移动鼠标查看交易日数值' }, h('svg', { viewBox: '0 0 140 38', preserveAspectRatio: 'none', 'aria-label': '近七日趋势图', onMouseMove: selectPoint, onMouseLeave: () => setHoverIndex(null) }, h('polyline', { className: 'vixd-trend-line', points: coordinates }), selected && h(React.Fragment, null, h('line', { className: 'vixd-trend-cross', x1: x(hoverIndex), x2: x(hoverIndex), y1: 2, y2: 36 }), h('circle', { className: 'vixd-trend-point', cx: x(hoverIndex), cy: y(selected.value), r: 3 }))), h('div', { className: 'vixd-trend-chart-labels' }, selected ? h(React.Fragment, null, h('span', null, date(selected.at)), h('span', null, format(selected.value))) : h(React.Fragment, null, h('span', null, date(points[0].at)), h('span', null, date(points.at(-1).at)))));
    }
    function SourceStatusPanel({ sources, updatedAt }) {
      if (!sources?.length) return h('section', { className: 'vixd-sources' }, h('div', { className: 'vixd-summary-label' }, '数据源连通性'), h('p', { className: 'vixd-muted' }, '该历史快照未记录连通性详情；点击刷新后可查看。'));
      const available = sources.filter(source => source.status === 'ok').length;
      return h('section', { className: 'vixd-sources' }, h('div', { className: 'vixd-summary-label' }, '数据源连通性'), h('div', { className: 'vixd-sources-head' }, h('b', null, `${available}/${sources.length} 可用`), h('span', { className: 'vixd-muted' }, `最近刷新：${new Date(updatedAt).toLocaleString()}`)), h('div', { className: 'vixd-source-list' }, ...sources.map(source => h('div', { className: `vixd-source-row ${source.status}`, key: source.id }, h('i', { className: 'vixd-source-status' }), h('span', null, source.label), h('span', { className: 'vixd-source-time' }, source.status === 'ok' ? (source.dataAt ? new Date(source.dataAt).toLocaleString() : '已连接') : '连接失败'), source.status === 'error' && h('span', { className: 'vixd-source-message' }, `最近失败原因：${source.message || '未知错误'}`)))));
    }
    function AdvicePanel({ advice }) {
      if (!advice) return null;
      return h('section', { className: 'vixd-advice' }, h('div', { className: 'vixd-advice-label' }, '当前信号解读'), h('h2', null, advice.headline), h('p', null, advice.posture), h('div', { className: 'vixd-advice-grid' }, h('div', null, h('div', { className: 'vixd-summary-label' }, '支持因素'), advice.supports.length ? h('ul', { className: 'vixd-advice-list' }, ...advice.supports.map(item => h('li', { key: item }, item))) : h('p', null, '当前没有绿色支持信号。')), h('div', null, h('div', { className: 'vixd-summary-label' }, '风险与反证'), advice.cautions.length ? h('ul', { className: 'vixd-advice-list' }, ...advice.cautions.map(item => h('li', { key: item }, item))) : h('p', null, '未发现额外反证。'))), h('p', { className: 'vixd-advice-next' }, h('b', null, '下一步观察：'), advice.nextStep), h('p', { className: 'vixd-advice-notice' }, advice.notice));
    }
    function IndicatorCard({ item, history }) {
      const trend = trendStats(item, history), format = value => Number.isFinite(value) ? value.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '—';
      return h('article', { className: `vixd-card ${item.signal}`, tabIndex: 0 },
        h('div', { className: 'vixd-card-title', title: item.name }, item.name),
        h('div', { className: 'vixd-value' }, item.value),
        h('p', { title: item.interpretation }, item.interpretation),
        h('div', { className: 'vixd-trend-tip', role: 'tooltip' }, h('div', { className: 'vixd-trend-title' }, `走势统计 · ${trend.source} ${trend.count} 条`), trend.count < 2 ? h('div', null, trend.count ? '已有一条有效数据；等待下一个交易日。' : '暂无可用历史数据。') : h(React.Fragment, null, h(TrendChart, { points: trend.points }), h('div', { className: 'vixd-trend-grid' }, h('span', null, '当前 ', h('b', null, format(trend.latest))), h('span', null, '较上次 ', h('b', null, `${trend.delta >= 0 ? '+' : ''}${format(trend.delta)}`)), h('span', null, '最低 ', h('b', null, format(trend.min))), h('span', null, '最高 ', h('b', null, format(trend.max))), h('span', null, '均值 ', h('b', null, format(trend.avg)))))),
        h('details', { className: 'vixd-card-more' }, h('summary', null, '阈值与来源'), h('p', null, `阈值：${item.threshold}`), h('p', null, `来源：${item.source}`), h('p', null, item.dataAt ? `行情时间：${new Date(item.dataAt).toLocaleString()}` : '行情时间未知')));
    }
    function RecordForm({ onSaved, history }) {
      const [form, setForm] = useState({ actionType: 'add', instrument: '组合', quantity: '', ratio: '', reason: '', note: '' });
      const [saving, setSaving] = useState(false); const [error, setError] = useState('');
      const [date, setDate] = useState(''); const [snapshotId, setSnapshotId] = useState('');
      const update = (key, value) => setForm(current => ({ ...current, [key]: value }));
      async function submit(event) {
        event.preventDefault(); setSaving(true); setError('');
        try {
          await api('POST', { type: 'action', ...form, recordedAt: date ? new Date(date).toISOString() : undefined, snapshotId: snapshotId || undefined });
          setForm({ actionType: 'add', instrument: '组合', quantity: '', ratio: '', reason: '', note: '' }); setDate(''); setSnapshotId(''); await onSaved();
        } catch (e) { setError(e.message); } finally { setSaving(false); }
      }
      return h('details', { className: 'vixd-composer' }, h('summary', null, '记录一次操作'),
        h('div', { className: 'vixd-composer-body' }, h('form', { onSubmit: submit }, h('div', { className: 'vixd-form' },
          h('label', null, '操作类型', h('select', { value: form.actionType, onChange: e => update('actionType', e.target.value) }, h('option', { value: 'add' }, '加仓'), h('option', { value: 'reduce' }, '减仓'))),
          h('label', null, '标的或组合', h('input', { value: form.instrument, onChange: e => update('instrument', e.target.value) })),
          h('label', null, '数量', h('input', { value: form.quantity, onChange: e => update('quantity', e.target.value), placeholder: '可选' })),
          h('label', null, '比例', h('input', { value: form.ratio, onChange: e => update('ratio', e.target.value), placeholder: '可选，如 10%' })),
          h('label', { className: 'vixd-full' }, '操作日期（补录时请选择快照）', h('input', { type: 'datetime-local', value: date, onChange: e => setDate(e.target.value) })),
          h('label', { className: 'vixd-full' }, '对应指标快照', h('select', { value: snapshotId, onChange: e => setSnapshotId(e.target.value) }, h('option', { value: '' }, '保存时重新获取最新六项指标'), ...history.slice().reverse().map(item => h('option', { key: item.id, value: item.id }, `${new Date(item.updatedAt).toLocaleString()} · 评分 ${item.score}`)))),
          h('label', { className: 'vixd-full' }, '决策依据', h('textarea', { value: form.reason, onChange: e => update('reason', e.target.value), placeholder: '记录当时基于指标的判断' })),
          h('label', { className: 'vixd-full' }, '备注', h('textarea', { value: form.note, onChange: e => update('note', e.target.value), placeholder: '可选' })),
          error && h('div', { className: 'vixd-error vixd-full' }, error),
          h('div', { className: 'vixd-full' }, h('button', { className: 'vixd-btn primary', disabled: saving }, saving ? '保存中…' : '保存操作记录'))))));
    }
    function ActionRow({ item, onDelete }) {
      return h('details', { className: 'vixd-act' }, h('summary', null, h('div', { className: 'vixd-act-row' },
        h('span', { className: `vixd-act-tag ${item.actionType}` }, item.actionType === 'add' ? '加仓' : '减仓'),
        h('span', { className: 'vixd-act-time' }, new Date(item.recordedAt).toLocaleString()),
        h('span', { className: 'vixd-act-score' }, item.snapshot.score),
        h('span', { className: 'vixd-act-risk', title: item.snapshot.riskLabel }, item.snapshot.riskLabel),
        h('span', { className: 'vixd-muted' }, item.instrument || '组合'),
        h('button', { className: 'vixd-act-delete', type: 'button', title: '删除记录', onClick: event => { event.preventDefault(); event.stopPropagation(); onDelete(item.id); } }, '删除'))),
        h('div', { className: 'vixd-act-detail' }, h('p', null, `数量：${item.quantity || '未填'} · 比例：${item.ratio || '未填'}`),
          h('p', null, `依据：${item.reason || '未填写'}`), item.note && h('p', null, `备注：${item.note}`),
          h('div', { className: 'vixd-chips' }, ...item.snapshot.indicators.map(indicator => h('span', { className: 'vixd-chip', key: indicator.name }, `${indicator.name} ${indicator.value}`)))));
    }
    function Dashboard() {
      const [state, setState] = useState({ current: null, history: [], actions: [] });
      const [loading, setLoading] = useState(true); const [error, setError] = useState('');
      async function load(refresh) { setLoading(true); setError(''); try { if (refresh) await api('POST', { type: 'refresh' }); const data = await api('GET'); setState(data); } catch (e) { setError(e.message); } finally { setLoading(false); } }
      useEffect(() => { load(false); const timer = setInterval(() => load(true), 1800000); return () => clearInterval(timer); }, []);
      const current = state.current;
      const indicators = current?.indicators || [];
      const valid = indicators.filter(item => item.signal !== 'error');
      const groupView = group => {
        const items = indicators.filter(item => item.group === group);
        const sources = [...new Set(items.map(item => item.source).filter(Boolean))].join(' · ');
        const dates = items.map(item => item.dataAt).filter(Boolean).map(value => Date.parse(value));
        const latest = dates.length ? new Date(Math.max(...dates)).toLocaleString() : '行情时间未知';
        return h('section', { className: 'vixd-section', key: group }, h('div', { className: 'vixd-group-head' }, h('h2', null, group), h('span', { className: 'vixd-group-meta', title: `${sources} · ${latest}` }, `${sources || '数据源未知'} · ${latest}`)), h('div', { className: 'vixd-grid' }, ...items.map(item => h(IndicatorCard, { key: item.name, item, history: state.history }))));
      };
      async function deleteAction(id) { try { await api('POST', { type: 'delete-action', id }); await load(false); } catch (e) { setError(e.message); } }
      return h('div', { className: 'vixd-page' }, h(Styles),
        h('div', { className: 'vixd-head' }, h('div', null, h('h1', null, '美股市场信号'), h('div', { className: 'vixd-muted' }, current ? `采集 ${new Date(current.updatedAt).toLocaleString()} · 有效 ${valid.length}/6` : '尚未采集数据')), h('div', { className: 'vixd-actions' }, h('button', { className: 'vixd-btn', onClick: () => load(true), disabled: loading }, loading ? '刷新中…' : '刷新指标'))),
        error && h('div', { className: 'vixd-error' }, error),
        h('div', { className: 'vixd-workspace' },
          h('main', { className: 'vixd-market' },
            current && h('section', { className: 'vixd-summary' }, h('div', { className: 'vixd-summary-card vixd-overview' },
              h('div', null, h('div', { className: 'vixd-summary-label' }, '绿色信号 / 有效指标'), h('div', { className: 'vixd-score' }, current.score.split('/')[0], h('small', null, ` / ${current.score.split('/')[1]}`)), h('div', { className: 'vixd-risk' }, current.riskLabel)),
              h('div', { className: 'vixd-overview-signals' }, h('div', { className: 'vixd-summary-label' }, '六项信号状态'), h('div', { className: 'vixd-signal-row' }, ...indicators.map(item => h('div', { className: 'vixd-signal', key: item.name, title: `${item.name}：${item.value}` }, h('i', { className: `vixd-dot ${item.signal}` }), h('span', null, signalShort(item.name)))))),
              h('div', { className: 'vixd-overview-price' }, h('div', { className: 'vixd-summary-label' }, '标普500'), h('div', { className: 'vixd-price' }, current.sp500Price?.toLocaleString() || '—'), h('div', { className: 'vixd-muted' }, '绿：底部 · 黄：关注')))),
            current?.advice && h(AdvicePanel, { advice: current.advice }),
            current && h(SourceStatusPanel, { sources: current.sources, updatedAt: current.updatedAt }),
            current?.errors?.length > 0 && h('details', { className: 'vixd-error-details' }, h('summary', null, `部分数据暂不可用（${current.errors.length} 项）`), h('p', null, current.errors.join(' · '))),
            ...['情绪指标', '技术指标'].map(groupView)),
          h('aside', { className: 'vixd-journal' },
            h('h2', { className: 'vixd-journal-title' }, '操作与记录'),
            h(RecordForm, { history: state.history, onSaved: () => load(false) }),
            h('section', { className: 'vixd-section' }, h('h2', null, '最近操作'), state.actions.length ? h('div', { className: 'vixd-actions-list' }, ...state.actions.map(item => h(ActionRow, { key: item.id, item, onDelete: deleteAction }))) : h('div', { className: 'vixd-muted' }, '还没有操作记录')))));
    }
    return { inject: ['slots', 'layout'], apply(ctx) { ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: 'vix-dashboard', order: 25, label: '市场信号' }, Icon)); ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: 'vix-dashboard' }, Dashboard)); } };
  }
});
