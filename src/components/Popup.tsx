import React, { useState } from "react";
import style from "../../styles/Home.module.css";

export default function Popup({trigger,setInputData,Input,submit,setButtonPop,}: any) {
  return trigger ? (
    <div className={style.popup}>
      <div className={style.innerpopup}>
        <div className={style.title}>
          <label> Title </label>
          <input
            type="text"
            value={Input.title}
            onChange={(e) =>
              setInputData({
                title: e.target.value,
                description: Input.description,
                sdate: Input.sdate,
                edate: Input.edate,
                status: "pending",
              })
            }
          />
        </div>

        <div className={style.description}>
          <label> Description </label>
          <textarea
            value={Input.description}
            onChange={(e) =>
              setInputData({
                title: Input.title,
                description: e.target.value,
                sdate: Input.sdate,
                edate: Input.edate,
                status: "pending",
              })
            }
          ></textarea>
        </div>

        <div className={style.date}>
          <div>
            <label> Start Date</label>
            <input
              type="date"
              value={Input.sdate}
              onChange={(e) =>
                setInputData({
                  title: Input.title,
                  description: Input.description,
                  sdate: e.target.value,
                  edate: Input.edate,
                  status: "pending",
                })
              }
            />{" "}
          </div>
          <div>
            {" "}
            <label> End Date </label>{" "}
            <input
              type="date"
              value={Input.edate}
              onChange={(e) =>
                setInputData({
                  title: Input.title,
                  description: Input.description,
                  sdate: Input.sdate,
                  edate: e.target.value,
                  status: "pending",
                })
              }
            />{" "}
          </div>
        </div>

        <div className={style.status}>
          <label> Status :- </label>

          <div className={style.status2}>
          <div>
            <input
              type="radio"
              name="status"
              value="Input.status"
              onChange={(e) =>
                setInputData({
                  title: Input.title,
                  description: Input.description,
                  sdate: Input.sdate,
                  edate: Input.edate,
                  status: "completed",
                })
              }
            />
            Completed
          </div>
          <div>
            <input
              type="radio"
              name="status"
              value="pending"
              onChange={(e) =>
                setInputData({
                  title: Input.title,
                  description: Input.description,
                  sdate: Input.sdate,
                  edate: Input.edate,
                  status: "pending",
                })
              }
            />
            Pending
          </div>
          </div>
        </div>

        <div className={style.popButton}>
          <button onClick={submit} type="submit"> Save </button>
          <button onClick={() => setButtonPop(false)}>Cancel</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
