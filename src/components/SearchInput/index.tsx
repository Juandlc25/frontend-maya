import { CSSProperties } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

const SearchInput = ({
  label,
  setValue,
  type,
  value,
  name,
  style,
  className,
  placeholder,
  onChange,
}: {
  label?: string;
  name?: string;
  type?: string;
  value: string;
  className?: string;
  placeholder?: string;
  style?: CSSProperties;
  setValue: (value: string) => void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}): JSX.Element => {
  return (
    <div style={style} className={cx(className, styles.container)}>
      <div className={styles.containerInner}>
        <label className={styles.label}>{label}</label>
        <div className={styles.content}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657789"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={(e) => {
                setValue(e.target.value);
                onChange && onChange(e);
              }}
              value={value}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
