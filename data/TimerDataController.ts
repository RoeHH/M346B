import Timer from "-/data/interfaces/ITimer.ts";
import ITimerDataController from "-/data/interfaces/ITimerDataController.ts";
import {
  MongoClient,
  ObjectId,
} from "https://deno.land/x/atlas_sdk@v1.0.2/mod.ts";

import "https://deno.land/x/dotenv@v3.2.0/load.ts";
const secrets = {
  key: Deno.env.get("DATA_API_KEY"),
  app: Deno.env.get("APP_ID"),
};
if (!secrets.app || !secrets.key) {
  throw new Error("environment variable DATA_API_KEY or APP_ID not set");
}

const client = new MongoClient({
  endpoint: "https://data.mongodb-api.com/app/" + secrets.app +
    "/endpoint/data/v1",
  dataSource: "iccee0",
  auth: {
    apiKey: secrets.key,
  },
});

const db = client.database("timer");
const timers = db.collection<Timer>("timers");


export const TimerDataController: ITimerDataController =
  class TimerDataController {
    private constructor() {}

    static async getTimerByName(name: string): Promise<Timer|undefined> {
      return await timers.findOne({name});
    }

    static async setTimer(newTimer: Timer): Promise<Timer> {
      await timers.updateOne({name: newTimer.name},{name: newTimer.name, intervale: newTimer.intervale},{upsert: true})
      return await timers.findOne({name: newTimer.name});
    }

    static async editTimer(name: string, editedTimer: Timer): Promise<Timer> {
      if (editedTimer.name === "") return editedTimer;
      await timers.updateOne({name},{name: editedTimer.name, intervale: editedTimer.intervale},{upsert: true})
      return await timers.findOne({name: editedTimer.name});
      
    }

    static async getAllTimers(): Promise<Timer[]> {
      return await timers.find({})
    }
  };
