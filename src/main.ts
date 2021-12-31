import { abort, print, visitUrl } from "kolmafia";

function itemSpade(startIndex: number, endIndex: number) {
  for (let x = startIndex; x <= endIndex; x++) {
    const itemPage = visitUrl(`inv_equip.php?pwd=&which=2&action=equip&whichitem=${x}`);
    if (itemPage.includes("Nopers.")) {
      print(`Item ${x} does not exist.`, `red`);
    } else {
      const fleamarketPage = visitUrl(
        `town_sellflea.php?pwd=&whichitem=${x}&sellprice=&selling=Yep.`
      );
      print(
        fleamarketPage.includes("That item cannot be sold or transferred.")
          ? `Item ${x} exists but is untradeable.`
          : `Item ${x} exists and is tradeable.`,
        `green`
      );
    }
  }
}

function skillSpade(startIndex: number, endIndex: number) {
  for (let x = startIndex; x <= endIndex; x++) {
    const skillPage = visitUrl(`desc_skill.php?whichskill=${x}`);
    if (skillPage.includes("No skill found.")) {
      print(`Skill ${x} does not exist.`, `red`);
    } else {
      print(`Skill ${x} exists.`, `green`);
    }
  }
}

function familiarSpade(startIndex: number, endIndex: number) {
  for (let x = startIndex; x <= endIndex; x++) {
    const familiarPage = visitUrl(`desc_familiar.php?which=${x}`);
    if (familiarPage.includes("No familiar was found.")) {
      print(`Familiar ${x} does not exist.`, `red`);
    } else {
      print(`Familiar ${x} exists.`, `green`);
    }
  }
}

function outfitSpade(startIndex: number, endIndex: number) {
  for (let x = startIndex; x <= endIndex; x++) {
    const skillPage = visitUrl(`desc_outfit.php?whichoutfit=${x}`);
    if (skillPage.includes("No such outfit is a thing.")) {
      print(`Outfit ${x} does not exist.`, `red`);
    } else {
      print(`Outfit ${x} exists.`, `green`);
    }
  }
}

export function main(argument: string): void {
  if (argument === undefined) {
    abort(`Please provide an argument.`);
  }
  const command: string[] = argument.split(" ", 3);
  if (command.length !== 3) {
    abort('Arguments should be formatted as: "item/skill/familiar/outfit start_index end_index"');
  }
  switch (command[0].toLowerCase()) {
    case "item":
      itemSpade(+command[1], +command[2]);
      break;
    case "skill":
      skillSpade(+command[1], +command[2]);
      break;
    case "familiar":
    case "fam":
      familiarSpade(+command[1], +command[2]);
      break;
    case "outfit":
      outfitSpade(+command[1], +command[2]);
      break;
    default:
      print(`Invalid argument.`, `red`);
      break;
  }
}
