// src/components/screens/module1Screens.ts
import IntroTextBlurred from "@/components/Module1TextBlurred";
import Module1TextClear from "../Module1TextClear";
import BladenMap from "../BladenMap";
import BladenMapChart from "../BladenMapChart";
import Module1Decision from "../Module1Decision";
import Module1Result from "../Module1Result";
import RaisedHand from "../RaisedHand";
import FileFolder from "../FileFolder";
import Gavel from "../Gavel";
import NewElections from "../NewElections";
import BUildingFoundationLight from "../BuildingFoundationLight";
import Level from "../Level";

export const module1Screens = [
  IntroTextBlurred,
  Module1TextClear,
  BladenMap,
  BladenMapChart,
  Module1Decision,
  Module1Result,
  RaisedHand,
  FileFolder,
  Gavel,
  NewElections,
  BUildingFoundationLight,
  Level,
] as const;
