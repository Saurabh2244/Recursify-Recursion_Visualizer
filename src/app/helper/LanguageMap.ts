interface Language {
  id: number;
  defaultCode: string;
}

export interface LanguageMap {
  [key: string]: Language;
}

export const languageMapData: LanguageMap = {
  "cpp": {
    id: 54,
    defaultCode: 
  "#include <bits/stdc++.h>\n"
    + "using namespace std;\n\n"
    + "class TreeVisualizer {\n"
    + "private:\n"
    + "    static const int N = 1e7+5; int nodeCount = 0; map<int, string> nodeToString;\n"
    + "    map<string, int> nodeToId; map<int, string> nodeToAns; map<int, pair<float, float>> pos;\n"
    + "    float *modifier = new float[N]; vector<int> *adj = new vector<int>[N];\n"
    + "public:\n"
    + "    void make(string nodeVal, int &node); void onHover(string nodeVal, int node); \n"
    + "    void buildTree(); void printData();\n"
    + "};\n\n"
    + "//!----------------------------------------------------------------------------------\n\n"
    + "TreeVisualizer tv;\n\n"
    + "//Pre-defined Helper functions\n"
    + "string getVectorToString(vector<int> &v);\n"
    + "string get2DVectorToString(vector<vector<int>> &v);\n"
    + "#define br \"\\\\n\"\n\n"
    + "//!--------------------PASTE YOUR RECURSIVE FUNCTION HERE----------------------------\n\n"
    + "int fib(int x, int ok=0){  // THIS IS A EXAMPLE RECURSIVE FUNCTION [REPLACE IT WITH YOURS]\n"
    + "    string nodeVal = \"fib(x = \" + to_string(x) + \")\";\n"
    + "    tv.make(nodeVal, ok);\n\n"
    + "    if(x<2){\n"
    + "        tv.onHover(to_string(x), ok);\n"
    + "        return x;\n"
    + "    }\n\n"
    + "    int tmp = fib(x - 1, ok) + fib(x - 2, ok);\n"
    + "    tv.onHover(to_string(tmp), ok);\n"
    + "    return tmp;\n"
    + "}\n\n"
    + "//!----------------------------------------------------------------------------------\n\n"
    + "int main()\n"
    + "{\n"
    + "    //Call you rescursive function here @ top\n"
    + "    int n = 5;\n"
    + "    fib(n);\n\n\n\n"
    + "    //Don't remove the below lines\n"
    + "    tv.buildTree();\n"
    + "    tv.printData();\n"
    + "}\n\n"
    + "//!------------------------------------------------------------------------------------------------------------------------------------------------\n\n"
    + "string getVectorToString(vector<int> &v){\n"
    + "    string res = \"[\";\n"
    + "    for(int i=0; i<v.size(); i++){\n"
    + "        res += to_string(v[i]);\n"
    + "        if(i!=v.size()-1){res += \", \";}\n"
    + "    }\n"
    + "    res += \"]\";\n"
    + "    return res;\n"
    + "}\n\n"
    + "string get2DVectorToString(vector<vector<int>> &v){\n"
    + "    string res = \"[\";\n"
    + "    for(int i=0; i<v.size(); i++){\n"
    + "        res += getVectorToString(v[i]);\n"
    + "        if(i!=v.size()-1) res += br;\n"
    + "    }\n"
    + "    res += \"]\";\n"
    + "    return res;\n"
    + "}\n\n"
    + "//!------------------------------------------------------------------------------------------------------------------------------------------------\n\n"
    + "void TreeVisualizer::buildTree() {\n"
    + "    // initializeX(nodeCount)\n"
    + "    for (int i = 1; i <= nodeCount; i++) {\n"
    + "        if (adj[i].empty()) continue;\n"
    + "        for (int j = 0; j < adj[i].size(); j++) {\n"
    + "            pos[adj[i][j]] = {j, 0};\n"
    + "        }\n"
    + "    }\n"
    + "    for (int i = 1; i <= nodeCount; i++) {\n"
    + "        if (adj[i].empty()) continue;\n"
    + "        float mid = pos[i].first - (pos[adj[i][0]].first + pos[adj[i].back()].first) / 2.00;\n"
    + "        modifier[i] = mid;\n"
    + "    }\n\n"
    + "    // updateXY(1, 0, 0)\n"
    + "    function<void(int,int,float)> updateXY = [&](int root, int depth, float modSum) {\n"
    + "        pos[root].first += modSum;\n"
    + "        pos[root].second = depth;\n"
    + "        for (int child : adj[root]) {\n"
    + "            updateXY(child, depth + 1, modSum + modifier[root]);\n"
    + "        }\n"
    + "    };\n"
    + "    updateXY(1, 0, 0);\n\n"
    + "    // makePositive()\n"
    + "    float minPos = 0;\n"
    + "    for (auto &it : pos) {\n"
    + "        minPos = min(minPos, it.second.first);\n"
    + "    }\n"
    + "    if (minPos < 0) {\n"
    + "        for (auto &it : pos) {\n"
    + "            it.second.first -= minPos;\n"
    + "        }\n"
    + "    }\n\n"
    + "    // Helper functions\n"
    + "    auto getRB = [&](int node) -> float {\n"
    + "        while (!adj[node].empty()) {\n"
    + "            node = adj[node].back();\n"
    + "        }\n"
    + "        return pos[node].first;\n"
    + "    };\n\n"
    + "    auto getLB = [&](int node) -> float {\n"
    + "        while (!adj[node].empty()) {\n"
    + "            node = adj[node][0];\n"
    + "        }\n"
    + "        return pos[node].first;\n"
    + "    };\n\n"
    + "    auto ShiftSubtree = [&](int node, float shift) {\n"
    + "        std::function<void(int, float)> shiftSubtree;\n"
    + "        shiftSubtree = [&](int node, float shift) {\n"
    + "            pos[node].first += shift;\n"
    + "            for (int child : adj[node]) {\n"
    + "                shiftSubtree(child, shift);\n"
    + "            }\n"
    + "        };\n"
    + "        shiftSubtree(node, shift);\n"
    + "    };\n\n"
    + "    // fixNodeConflicts(1)\n"
    + "    function<void(int)> fixNodeConflicts = [&](int root) {\n"
    + "        for (int child : adj[root]) {\n"
    + "            fixNodeConflicts(child);\n"
    + "        }\n"
    + "        if (adj[root].empty()) return;\n"
    + "        for (int j = 0; j < adj[root].size() - 1; j++) {\n"
    + "            int child1 = adj[root][j];\n"
    + "            int child2 = adj[root][j + 1];\n"
    + "            float RB_ofLeft = getRB(child1);\n"
    + "            float LB_ofRight = getLB(child2);\n"
    + "            if (RB_ofLeft >= LB_ofRight) {\n"
    + "                ShiftSubtree(child2, RB_ofLeft - LB_ofRight + 1);\n"
    + "            }\n"
    + "        }\n"
    + "        pos[root].first = (pos[adj[root][0]].first + pos[adj[root].back()].first) / 2.00;\n"
    + "    };\n"
    + "    fixNodeConflicts(1);\n"
    + "}\n\n"
    + "void TreeVisualizer::make(string nodeVal, int &node) {\n"
    + "    nodeCount++;\n"
    + "    nodeToString[nodeCount] = nodeVal;\n"
    + "    nodeToId[nodeVal] = nodeCount;\n"
    + "    adj[node].push_back(nodeCount);\n"
    + "    node = nodeCount;\n"
    + "}\n\n"
    + "void TreeVisualizer::onHover(string nodeVal, int node) {\n"
    + "    nodeToAns[node] = nodeVal;\n"
    + "}\n\n"
    + "void TreeVisualizer::printData(){\n"
    + "    cout<<\"{\\n\";\n"
    + "    cout<<\"\\\"nodes\\\": [\\n\";\n"
    + "    for(auto it = nodeToString.begin(); it!=nodeToString.end(); it++){\n"
    + "        cout<<\"{ \\\"id\\\": \\\"\"<<it->first<<\"\\\",\";\n"
    + "        cout<<\" \\\"position\\\": {\\\"x\\\": \"<<pos[it->first].first<<\", \";\n"
    + "        cout<<\"\\\"y\\\": \"<<pos[it->first].second<<\"}, \";\n"
    + "        cout<<\"\\\"data\\\": { \\\"label\\\": \\\"\"<<it->second<<\"\\\", \\\"hidden\\\": \\\"\"<<nodeToAns[it->first]<<\"\\\"} }\";\n"
    + "        auto next_it = next(it);\n"
    + "        if(next_it != nodeToString.end()){cout << \",\";}\n"
    + "        cout << \"\\n\";\n"
    + "    }\n"
    + "    cout<<\"],\\n\";\n"
    + "    cout<<\"\\\"edges\\\": [\\n\";\n"
    + "    int tot = 1;\n"
    + "    for(int i=1; i<=nodeCount; i++){\n"
    + "        for(int x : adj[i]){\n"
    + "            cout<<\"{ \\\"id\\\": \\\"\"<<tot<<\"\\\", \";\n"
    + "            cout<<\"\\\"source\\\": \";\n"
    + "            cout<<\"\\\"\"<<i<<\"\\\"\"<<\", \";\n"
    + "            cout<<\"\\\"target\\\" : \";\n"
    + "            cout<<\"\\\"\"<<x<<\"\\\" }\";\n\n"
    + "            if(tot!=nodeCount-1){cout<<\",\";}\n"
    + "            cout<<\"\\n\";\n\n"
    + "            tot++;\n"
    + "        }\n"
    + "    }\n"
    + "    cout<<\"]\\n\";\n"
    + "    cout<<\"}\\n\";\n"
    + "}"
  },
  "java": {
    id: 62,
    defaultCode: `public class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
    }`,
  },
  "python": {
    id: 71,
    defaultCode: `print("Hello World!")`,
  },
  "javascript": {
    id: 63,
    defaultCode: `console.log("Hello World!");`,
  }
};