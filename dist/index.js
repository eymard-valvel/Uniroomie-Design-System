import { jsxs as u, jsx as e } from "react/jsx-runtime";
import { useId as h, useState as b } from "react";
function k({
  variant: a = "primary",
  size: c = "medium",
  loading: n = !1,
  disabled: s = !1,
  className: l = "",
  children: i,
  ...r
}) {
  const d = ["ur-button", `ur-button--${a}`, `ur-button--${c}`, l].filter(Boolean).join(" ");
  return /* @__PURE__ */ u(
    "button",
    {
      ...r,
      className: d,
      disabled: s || n,
      "aria-busy": n || void 0,
      children: [
        n && /* @__PURE__ */ e("span", { className: "ur-button__spinner", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { children: n ? "Cargando..." : i })
      ]
    }
  );
}
function y({ label: a, id: c, className: n = "", onChange: s, ...l }) {
  const i = h(), r = c ?? i;
  return /* @__PURE__ */ u("label", { className: `ur-checkbox ${n}`, htmlFor: r, children: [
    /* @__PURE__ */ e(
      "input",
      {
        ...l,
        id: r,
        type: "checkbox",
        className: "ur-checkbox__input",
        onChange: (d) => s == null ? void 0 : s(d.currentTarget.checked, d)
      }
    ),
    /* @__PURE__ */ e("span", { className: "ur-checkbox__box", "aria-hidden": "true" }),
    a && /* @__PURE__ */ e("span", { className: "ur-checkbox__label", children: a })
  ] });
}
function I({ label: a, id: c, className: n = "", value: s = "", onChange: l, ...i }) {
  const r = h(), d = c ?? r;
  return /* @__PURE__ */ u("label", { className: `ur-radio ${n}`, htmlFor: d, children: [
    /* @__PURE__ */ e(
      "input",
      {
        ...i,
        id: d,
        type: "radio",
        value: s,
        className: "ur-radio__input",
        onChange: (p) => l == null ? void 0 : l(p.currentTarget.value, p)
      }
    ),
    /* @__PURE__ */ e("span", { className: "ur-radio__circle", "aria-hidden": "true" }),
    a && /* @__PURE__ */ e("span", { className: "ur-radio__label", children: a })
  ] });
}
function g({
  label: a,
  error: c,
  helperText: n,
  success: s = !1,
  inputSize: l = "medium",
  id: i,
  className: r = "",
  ...d
}) {
  const p = h(), t = i ?? p, o = c || n;
  return /* @__PURE__ */ u("div", { className: `ur-input ur-input--${l} ${c ? "ur-input--error" : ""} ${s ? "ur-input--success" : ""} ${r}`, children: [
    a && /* @__PURE__ */ e("label", { className: "ur-input__label", htmlFor: t, children: a }),
    /* @__PURE__ */ e(
      "input",
      {
        ...d,
        id: t,
        className: "ur-input__field",
        "aria-invalid": !!c,
        "aria-describedby": o ? `${t}-message` : void 0
      }
    ),
    o && /* @__PURE__ */ e("span", { className: "ur-input__message", id: `${t}-message`, role: c ? "alert" : void 0, children: o })
  ] });
}
function w({ checked: a, defaultChecked: c = !1, label: n, onChange: s, className: l = "", disabled: i, ...r }) {
  const [d, p] = b(c), t = a !== void 0, o = t ? a : d, _ = () => {
    if (i) return;
    const f = !o;
    t || p(f), s == null || s(f);
  };
  return /* @__PURE__ */ u("span", { className: `ur-toggle ${l}`, children: [
    /* @__PURE__ */ e(
      "button",
      {
        ...r,
        type: "button",
        role: "switch",
        "aria-checked": o,
        className: `ur-toggle__control ${o ? "is-checked" : ""}`,
        disabled: i,
        onClick: _,
        children: /* @__PURE__ */ e("span", { className: "ur-toggle__thumb" })
      }
    ),
    n && /* @__PURE__ */ e("span", { className: "ur-toggle__label", children: n })
  ] });
}
function T({
  label: a,
  options: c,
  placeholder: n = "Seleccionar opción",
  error: s,
  value: l,
  defaultValue: i = "",
  onChange: r,
  id: d,
  className: p = "",
  ...t
}) {
  const o = h(), _ = d ?? o, [f, N] = b(i), v = l === void 0 ? f : l;
  return /* @__PURE__ */ u("div", { className: `ur-dropdown ${s ? "ur-dropdown--error" : ""} ${p}`, children: [
    a && /* @__PURE__ */ e("label", { className: "ur-dropdown__label", htmlFor: _, children: a }),
    /* @__PURE__ */ u(
      "select",
      {
        ...t,
        id: _,
        className: "ur-dropdown__select",
        value: v,
        "aria-invalid": !!s,
        onChange: (m) => {
          l === void 0 && N(m.currentTarget.value), r == null || r(m.currentTarget.value, m);
        },
        children: [
          /* @__PURE__ */ e("option", { value: "", children: n }),
          c.map((m) => /* @__PURE__ */ e("option", { value: m.value, disabled: m.disabled, children: m.label }, m.value))
        ]
      }
    ),
    s && /* @__PURE__ */ e("span", { className: "ur-dropdown__error", role: "alert", children: s })
  ] });
}
function B({ brand: a = "Uniroomie", items: c, activeItem: n, variant: s = "light", action: l, onNavigate: i }) {
  return /* @__PURE__ */ e("nav", { className: `ur-navbar ur-navbar--${s}`, "aria-label": "Navegación principal", children: /* @__PURE__ */ u("div", { className: "ur-navbar__inner", children: [
    /* @__PURE__ */ e("div", { className: "ur-navbar__brand", children: a }),
    /* @__PURE__ */ e("div", { className: "ur-navbar__items", children: c.map((r) => /* @__PURE__ */ e(
      "a",
      {
        href: r.href ?? "#",
        className: `ur-navbar__link ${n === r.id ? "is-active" : ""}`,
        "aria-current": n === r.id ? "page" : void 0,
        onClick: (d) => {
          r.href || d.preventDefault(), i == null || i(r.id, r.href);
        },
        children: r.label
      },
      r.id
    )) }),
    l && /* @__PURE__ */ e("div", { className: "ur-navbar__action", children: l })
  ] }) });
}
function F({ title: a, description: c, variant: n = "default", className: s = "", children: l, ...i }) {
  return /* @__PURE__ */ u("section", { ...i, className: `ur-card ur-card--${n} ${s}`, children: [
    (a || c) && /* @__PURE__ */ u("header", { className: "ur-card__header", children: [
      a && /* @__PURE__ */ e("h3", { className: "ur-card__title", children: a }),
      c && /* @__PURE__ */ e("p", { className: "ur-card__description", children: c })
    ] }),
    /* @__PURE__ */ e("div", { className: "ur-card__content", children: l })
  ] });
}
const j = {
  colors: {
    primary: "#ff5a1f",
    primaryHover: "#eb4b14",
    primaryPressed: "#d9400c",
    secondary: "#253746",
    text: "#172a38",
    textMuted: "#64748b",
    surface: "#ffffff",
    surfaceMuted: "#f1f3f5",
    border: "#d5dbe1",
    focus: "#3478f6",
    error: "#e53935",
    success: "#159a6c",
    warning: "#e6a23c",
    info: "#2583c5"
  },
  spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px" },
  radius: { sm: "4px", md: "8px", lg: "12px" },
  typography: { family: 'Inter, "Segoe UI", Arial, sans-serif', body: "16px", small: "14px" }
};
export {
  k as Button,
  F as Card,
  y as Checkbox,
  T as Dropdown,
  g as Input,
  B as Navbar,
  I as RadioButton,
  w as Toggle,
  j as uniroomieTokens
};
