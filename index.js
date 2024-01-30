import kill from "tree-kill";
import psList from "ps-list";

const KillChild = process => {
	console.log(process.name);
	kill(process.pid);
};

const main = async () => {
	const Allprocesses = await psList();
	const processes = Allprocesses.filter(p => p.name === "chrome.exe");

	if (processes.length == 0) {
		console.log("No Chrome Instances Found");
	} else {
		console.log("Killing...");
		processes.forEach(p => {
			KillChild(p);
		});

		console.log(`Killed ${processes.length} chrome process!`);
	}

	console.log("Exiting Chrome Killer.");
};

main();
